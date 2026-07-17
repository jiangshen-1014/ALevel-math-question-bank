import re, json, zipfile, time, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE P3 录入/24_FM_32.xlsx"
DATAJS = r"E:/workbuddy/题库软件/assets/js/data.js"

NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

MONTH = {"MJ": "May/June", "FM": "Feb/March", "ON": "Oct/Nov"}

# 章节由内容判定（模板列空），严格对应 CIE|P3 预设前 9 章 + 预设无 Differentiation 的题暂归 "Algebra"
CHAPTER = {
    1:  "Algebra (factor theorem and remainder theorem)",   # 多项式除法
    2:  "Algebra (partial fractions and binomial expansions)", # 二项展开
    3:  "Complex numbers",
    4:  "Logarithmic and exponential functions",
    5:  "Complex numbers",                                   # Argand 图
    6:  "Algebra",                                           # 隐函数求导，预设无 Differentiation → 沿用库内 "Algebra" 约定
    7:  "Numerical solution of equations",                   # 迭代法求 α
    8:  "Trigonometry",
    9:  "Vectors",
    10: "Integration",                                       # 部分分式后定积分
    11: "Differential equations",
}
DIFF = {1:2, 2:3, 3:3, 4:3, 5:3, 6:4, 7:4, 8:4, 9:4, 10:4, 11:4}

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return (0, 0) if not m else (
        sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2)))

z = zipfile.ZipFile(XLSX)
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
    if not t.startswith("xl/"): t = "xl/" + t.lstrip("/")
    if starget is None: starget = t
root = ET.fromstring(z.read(starget))
rows = root.find(f"{NS}sheetData").findall(f"{NS}row")

def cell_val(c):
    t = c.get("t"); v = c.find(f"{NS}v"); isv = c.find(f"{NS}is")
    if t == "s" and v is not None: return shared[int(v.text)]
    if t == "inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
    if v is not None: return v.text
    return None

def clean_stem(s):
    s = str(s)
    # 铁律（用户 2026-07-17）：字面 \newline / \n\n 转义 → 删除（不转真实换行）；真实 alt+enter 换行 (\n) 保留
    s = s.replace("\\newline", "")
    s = re.sub(r"\\n\\n", "", s)
    # 一致性修正（仅文本模式，数学区已被 mdToHtml 保护，不受影响）
    s = s.replace("\\;", " ")               # 纯文本 \;（小问标签后间距）→ 空格
    s = s.replace("\\hfill(", "\\hfill (")  # 规范 \hfill 间距，与库内种子一致
    return s

entries = []
for row in rows[1:]:
    cells = {}
    for c in row:
        if not c.get("r"): continue
        ci_idx, _ = col_to_idx(c.get("r"))
        cells[ci_idx] = cell_val(c)
    src = cells.get(2); stem = cells.get(3)
    if not src or not stem:
        continue
    parts = str(src).split("_")
    yy, ser, var = parts[0], parts[1], parts[2]
    qno = int(parts[3]) if len(parts) > 3 else int(re.sub(r"\D", "", str(src)))
    year = 2000 + int(yy)
    month = MONTH[ser]
    figcell = cells.get(4)
    figure = f"data/images/{src}.png" if (figcell and "DISPIMG" in str(figcell)) else ""
    stem_clean = clean_stem(stem)
    assert "\\newline" not in stem_clean, f"{src}: literal \\newline remains"
    assert "\\n\\n" not in stem_clean, f"{src}: literal \\n\\n remains"
    assert "\\;" not in stem_clean, f"{src}: literal \\; remains"
    entries.append({
        "id": f"cie_p3_{yy}{ser}{var}_q{qno}",
        "board": "CIE",
        "subject": "P3",
        "chapter": [CHAPTER[qno]],
        "source": str(src),
        "stem": stem_clean,
        "figure": figure,
        "difficulty": DIFF[qno],
        "marks": int(cells.get(8)) if cells.get(8) else 0,
        "solution": "",
        "createdAt": int(time.time() * 1000),
        "examRef": {"year": year, "month": month, "paper": var, "qno": qno, "code": var,
                    "label": f"{year} {month} · Paper {var} Q{qno}"},
    })

print(f"Built {len(entries)} entries")
for e in entries:
    print(" ", e["id"], "|", e["chapter"][0], "| diff", e["difficulty"], "| marks", e["marks"], "| fig", e["figure"] or "-")

# ---- 安全注入：在 SEED_QUESTIONS 的 ]; 之前插入，保留 ]; 及之后 Store ----
with open(DATAJS, encoding="utf-8") as f:
    data = f.read()

idx = data.index("const SEED_QUESTIONS")
end = data.index("];", idx)
assert end > idx, "]; not found after SEED_QUESTIONS"
new_jsons = [json.dumps(e, ensure_ascii=False, separators=(",", ":")) for e in entries]
block = ",\n" + ",\n".join(new_jsons) + "\n"
new_data = data[:end] + block + "];" + data[end + 2:]

with open(DATAJS, "w", encoding="utf-8") as f:
    f.write(new_data)
print("Injected. data.js updated.")
