#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CIE S1 批量录入注入脚本（多配图版）
====================================
相比 P3 注入的关键改进：
  1. 自动解析 xlsx 内全部 cellImage（ID -> media），不再手写 DISPIMG_MEDIA 映射；
  2. 「配图 / 配图2 / 配图3」三列各挂一张图，自动保存为
       data/images/{来源}.png
       data/images/{来源}_2.png
       data/images/{来源}_3.png
     并把 figure 字段写成【路径数组】（兼容 app.js 的数组渲染）；
  3. 存在性检查：已录入的题跳过，不重复注入；
  4. 行式插入到 SEED_QUESTIONS 的 `];` 之前，绝不动 `];` 之后的 Store IIFE；
  5. 默认 DRY_RUN（只打印将要写入的内容，不落盘），确认无误后把 APPLY=True 再跑。

用法：
  1) 在下面常量区填好 XLSX 路径；
  2) 按本卷在 CHAPTER / DIFF 里填每题章节与难度（可空 -> 自动推断）；
  3) 先 `python .workbuddy/inject_s1.py` 看预览；
  4) 确认无误，把 APPLY 改为 True 再跑，脚本会自动备份 data.js 并写入、最后 node --check。
"""
import re, json, zipfile, time, os, shutil, xml.etree.ElementTree as ET

# ===================== 需填写 =====================
XLSX = r"F:/题库输入表格/CIE S1录入/25_ON_51.xlsx"       # TODO: 填实际 S1 录入表
APPLY = False                                            # 确认无误后改 True 才会写入 data.js
# =================================================

ROOT = r"E:/workbuddy/题库软件"
DATAJS = os.path.join(ROOT, "assets/js/data.js")
IMG_DIR = os.path.join(ROOT, "data/images")
MONTH = {"MJ": "May/June", "FM": "Feb/March", "ON": "Oct/Nov"}

# 每题章节：qno -> chapter（可填字符串或 [章1,章2]）；留空 {} 则按关键词推断
CHAPTER = {
    1: ["Discrete random variables（离散随机变量）"],                                  # kx²分布表 + E(X) + 条件概率 P(X≠2|X>0)
    2: ["Discrete random variables（离散随机变量）"],                                  # 掷骰至首次/第三次出现6（几何/负二项）
    3: ["Representation of data（数据表示）"],                                        # 背靠背茎叶图比较两家公司薪资
    4: ["Probability（概率）"],                                                       # 两袋转移概率（树状图）
    5: ["Probability（概率）"],                                                       # 穿毛衣条件概率
    6: ["The normal distribution（正态分布）"],                                       # 两厂正态 + 逆查 μ,σ
    7: ["Permutations & combinations（排列组合）"],                                   # SEYCHELLES 排列约束
}
# 每题难度 1–5；留空 {} 则按分值推断
DIFF = {
    1: 3, 2: 3, 3: 4, 4: 3, 5: 4, 6: 4, 7: 5,
}

# ---------- 通用：解析 xlsx ----------
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2))

def resolve_cellimages(z):
    """返回 {DISPIMG_id: 'xl/media/imageN.png'}"""
    out = {}
    if "xl/cellimages.xml" not in z.namelist():
        return out
    xml = z.read("xl/cellimages.xml").decode("utf-8")
    blocks = re.findall(r"<etc:cellImage>.*?</etc:cellImage>", xml, re.S)
    id2rid = {}
    for b in blocks:
        nm = re.search(r'name="(ID_[0-9A-Fa-f]+)"', b)
        rid = re.search(r'r:embed="(rId\d+)"', b)
        if nm and rid:
            id2rid[nm.group(1)] = rid.group(1)
    rels = z.read("xl/_rels/cellimages.xml.rels").decode("utf-8")
    rid2media = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels))
    for name, rid in id2rid.items():
        tgt = rid2media.get(rid)
        if tgt:
            if not tgt.startswith("xl/"):
                tgt = "xl/" + tgt.lstrip("/")
            out[name] = tgt
    return out

def load_xlsx(path):
    z = zipfile.ZipFile(path)
    shared = []
    if "xl/sharedStrings.xml" in z.namelist():
        root = ET.fromstring(z.read("xl/sharedStrings.xml"))
        for si in root.findall(f"{NS}si"):
            shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))
    wb = ET.fromstring(z.read("xl/workbook.xml"))
    rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
    rid_to_target = {r.get("Id"): r.get("Target") for r in rels}
    starget = None
    for s in wb.find(f"{NS}sheets"):
        t = rid_to_target.get(s.get(RNS))
        t = (t or "").lstrip("/")
        if not t.startswith("xl/"):
            t = "xl/" + t
        starget = t
        break
    sheet_xml = z.read(starget).decode("utf-8")
    # 某些 WPS 生成的 sheet 使用 r: 前缀（如 r:id）但未声明 xmlns:r，ET 会报 unbound prefix
    if 'xmlns:r=' not in sheet_xml[:1000]:
        sheet_xml = sheet_xml.replace(
            '<worksheet',
            '<worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"',
            1)
    root = ET.fromstring(sheet_xml)
    rows = root.find(f"{NS}sheetData").findall(f"{NS}row")
    def cell_val(c):
        t = c.get("t"); v = c.find(f"{NS}v"); isv = c.find(f"{NS}is")
        if t == "s" and v is not None: return shared[int(v.text)]
        if t == "inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
        if v is not None: return v.text
        return None
    return z, rows, cell_val

# ---------- 来源解析（兼容 25_MJ_31_q1 与 25MJ31_q1） ----------
def parse_source(src):
    s = str(src).strip()
    m = re.match(r"^(\d{2})(MJ|FM|ON)(\d{2})_?q?(\d+)?$", s, re.I)
    if m:
        yy, ser, var, q = m.group(1), m.group(2).upper(), m.group(3), m.group(4)
        return yy, ser, var, (int(q) if q else None)
    parts = s.split("_")
    if len(parts) >= 3:
        yy, ser, var = parts[0], parts[1], parts[2].replace("q", "")
        q = parts[3].replace("q", "") if len(parts) > 3 else None
        return yy, ser, var, (int(q) if q else None)
    raise SystemExit(f"!! 来源格式无法识别: {src}（应为 25_MJ_31_q1 或 25MJ31_q1）")

# ---------- 章节/难度推断 ----------
def infer_chapter(stem):
    s = stem.lower()
    if any(k in s for k in ["stem-and-leaf", "stem and leaf", "histogram", "box plot", "boxplot",
                            "cumulative", "frequency", "quartile", "median", "mean", "mode", "bar chart"]):
        return "Representation of data（数据表示）"
    if any(k in s for k in ["permutation", "combination", "arrange", "in how many ways", "choose"]):
        return "Permutations & combinations（排列组合）"
    if any(k in s for k in ["tree diagram", "probability", "p(", "given that"]):
        return "Probability（概率）"
    if any(k in s for k in ["random variable", "expectation", "e(", "variance", "probability distribution", "p(x="]):
        return "Discrete random variables（离散随机变量）"
    if any(k in s for k in ["normal distribution", "standard normal", "z-", "n(", "μ", "sigma"]):
        return "The normal distribution（正态分布）"
    return "Representation of data（数据表示）"

def infer_diff(marks):
    if marks <= 2: return 1
    if marks <= 4: return 2
    if marks <= 6: return 3
    if marks <= 9: return 4
    return 5

# ---------- 主流程 ----------
def main():
    assert os.path.exists(XLSX), f"XLSX 不存在: {XLSX}"
    z, rows, cell_val = load_xlsx(XLSX)
    id2media = resolve_cellimages(z)
    print(f"[cellimages] 解析到 {len(id2media)} 张图: {list(id2media.keys())[:6]}{'...' if len(id2media)>6 else ''}")

    # 存在性检查：现有 data.js 里的全部 id
    data_txt = open(DATAJS, encoding="utf-8").read()
    existing = set(re.findall(r'"id"\s*:\s*"([^"]+)"', data_txt))
    existing |= set(re.findall(r'\{"id":"([^"]+)"', data_txt))
    print(f"[存在性] data.js 现有 {len(existing)} 个 id")

    # ---- 表头 -> 列索引（1-based），兼容 9 列/11 列模板，按名取列不靠固定序号 ----
    header = {}
    for c in rows[0]:
        if not c.get("r"):
            continue
        ci, _ = col_to_idx(c.get("r"))
        nm = (cell_val(c) or "").strip()
        if nm:
            header[nm] = ci
    def H(*names):
        for n in names:
            if n in header:
                return header[n]
        return None
    col_src = H("来源"); col_stem = H("题干"); col_marks = H("分值")
    col_ch = H("章节"); col_diff = H("难度"); col_sol = H("解析")
    fig_cols = sorted(ci for nm, ci in header.items() if nm.startswith("配图"))
    assert col_src and col_stem, f"!! 表头缺少 来源/题干 列；识别到={list(header)}"
    print(f"[表头] 来源={col_src} 题干={col_stem} 配图列={fig_cols} 分值={col_marks} 章节={col_ch} 难度={col_diff} 解析={col_sol}")

    entries = []
    for row in rows[1:]:
        cells = {}
        raw = {}
        for c in row:
            if not c.get("r"):
                continue
            ci, _ = col_to_idx(c.get("r"))
            cells[ci] = cell_val(c)
            raw[ci] = ET.tostring(c, encoding="unicode")
        src = cells.get(col_src); stem = cells.get(col_stem)
        if not src or not stem:
            continue
        yy, ser, var, q_from_src = parse_source(src)
        qno = q_from_src if q_from_src else int(re.sub(r"\D", "", str(src)))
        year = 2000 + int(yy)
        month = MONTH[ser]

        # ---- 多配图：按表头「配图/配图2/配图3…」列，仅提取真实 DISPIMG ----
        figure = []
        for n, col_idx in enumerate(fig_cols):
            suffix = "" if n == 0 else f"_{n+1}"
            cell_xml = raw.get(col_idx, "")
            # 去重：DISPIMG 同时出现在 <f> 与 <v> 里，会被匹配两次
            ids = list(dict.fromkeys(re.findall(r'DISPIMG\("([^"]+)"', cell_xml)))
            if not ids and cells.get(col_idx):
                # 兼容：单元格直接写了 ID_ 文本
                ids = list(dict.fromkeys(re.findall(r'(ID_[0-9A-Fa-f]+)', str(cells.get(col_idx)))))
            for did in ids:
                media = id2media.get(did)
                if not media:
                    raise SystemExit(f"!! 无法解析 {src} 的配图列{col_idx} 的 DISPIMG id={did}（请检查 xlsx 是否内嵌了该图）")
                fname = f"{src}{suffix}.png"
                fpath = f"data/images/{fname}"
                if APPLY:
                    data_bytes = z.read(media)
                    with open(os.path.join(IMG_DIR, fname), "wb") as f:
                        f.write(data_bytes)
                figure.append(fpath)
                print(f"  {'[写入]' if APPLY else '[预览]'} 图 {src}{suffix} <- {media}")

        # ---- 清理题干字面转义 ----
        stem_clean = str(stem).replace("\\newline", "").replace("\\;", " ")
        stem_clean = re.sub(r"\\n\\n", "", stem_clean)
        # 分值：优先读「分值」列；缺失则对 \hfill(N) 求和（非计数）
        mv = cells.get(col_marks) if col_marks else None
        if mv not in (None, ""):
            marks = int(float(str(mv)))
        else:
            hf = [int(x) for x in re.findall(r"\\hfill\s*\(\s*(\d+)\s*\)", stem_clean)]
            marks = sum(hf) if hf else len(re.findall(r"\\hfill", stem_clean))

        # 章节：CHAPTER dict > 表头「章节」列 > 关键词推断
        ch = CHAPTER.get(qno)
        cv = cells.get(col_ch) if col_ch else None
        if not ch and cv not in (None, ""):
            ch = cv
        if not ch:
            ch = infer_chapter(stem_clean)
        ch = ch if isinstance(ch, list) else [ch]
        # 难度：DIFF dict > 表头「难度」列 > 按分值推断
        dv = cells.get(col_diff) if col_diff else None
        diff = DIFF.get(qno) or (int(float(str(dv))) if dv not in (None, "") else infer_diff(marks))
        sol = str(cells.get(col_sol) or "") if col_sol else ""

        eid = f"cie_s1_{yy}{ser}{var}_q{qno}"
        dup = eid in existing
        entries.append({
            "id": eid, "board": "CIE", "subject": "S1",
            "chapter": ch, "source": str(src), "stem": stem_clean,
            "figure": figure, "difficulty": diff, "marks": marks,
            "solution": sol,
            "createdAt": int(time.time()*1000),
            "examRef": {"year": year, "month": month, "paper": var, "qno": qno, "code": var,
                        "label": f"{year} {month} · Paper {var} Q{qno}"},
            "_dup": dup,
        })

    z.close()
    new = [e for e in entries if not e["_dup"]]
    dups = [e for e in entries if e["_dup"]]
    print(f"\n扫描到 {len(entries)} 题，其中新增 {len(new)} 题，已存在跳过 {len(dups)} 题")
    for e in dups:
        print("  跳过(已存在):", e["id"])
    if not new:
        print("无需注入。"); return
    print("\n待注入：")
    for e in new:
        print(f"  {e['id']} | {e['chapter']} | diff {e['difficulty']} | marks {e['marks']} | figs {len(e['figure'])}")

    if not APPLY:
        print("\n=== DRY RUN：未写入。确认无误后把脚本顶部 APPLY=True 再跑。 ===")
        return

    # ---------- 行式安全插入 ----------
    backup = DATAJS + f".bak_{int(time.time())}"
    shutil.copy(DATAJS, backup)
    print("已备份:", backup)

    txt = open(DATAJS, encoding="utf-8").read()
    # 关键锚点：const SEED_QUESTIONS = [ 之后第一个 ]; 即数组结尾。
    # 不能用 rfind("];")（会命中 Store 内部 parseExamRef 等的 ];），
    # 也不能锚定 "const Store"（二者之间隔着注释块与多个 ];）。
    seed_start = txt.index("const SEED_QUESTIONS = [")
    seed_close = txt.index("];", seed_start)
    before = txt[:seed_close]
    sep = ",\n" if before.rstrip().endswith("}") else "\n"
    block = ",\n".join(json.dumps(e, ensure_ascii=False, indent=2) for e in new)
    new_txt = before.rstrip() + sep + block + "\n];" + txt[seed_close + 2:]

    # 校验 Store 未被截断
    assert new_txt.count("const Store = (function") == 1, "!! Store IIFE 被破坏"
    open(DATAJS, "w", encoding="utf-8").write(new_txt)
    print(f"已写入 {len(new)} 题到 data.js")

    # node 语法校验
    node = r"C:/Users/Administrator/.workbuddy/binaries/node/versions/22.22.2/node.exe"
    os.system(f'"{node}" --check "{DATAJS}" && echo node --check OK')

if __name__ == "__main__":
    main()
