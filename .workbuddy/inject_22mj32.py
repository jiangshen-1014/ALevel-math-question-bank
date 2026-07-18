import re, json, zipfile, time, html, os, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE P3 录入/22_MJ_32.xlsx"
DATAJS = r"E:/workbuddy/题库软件/assets/js/data.js"
IMG_DIR = r"E:/workbuddy/题库软件/data/images"

MONTH = {"MJ": "May/June", "FM": "Feb/March", "ON": "Oct/Nov"}

# 按 qno 推断章节（本文件章节列全空；配图列仅数字占位、无嵌入图）。
CHAPTER = {
    1:  ["Logarithmic and exponential functions"],                 # ln(e^{2x}+3)=2x+ln3 求 3dp
    2:  ["Trigonometry"],                                          # 三角方程 3cos^2θ=...
    3:  ["Algebra (factor theorem and remainder theorem)"],        # 因式/余数定理求 a,b
    4:  ["Differentiation"],                                       # 曲线驻点（dy/dx=0）
    5:  ["Numerical solution of equations"],                       # 作图证根+夹逼+迭代
    6:  ["Differential equations"],                                # 可分离变量微分方程
    7:  ["Differentiation"],                                       # 隐函数求导 + 水平切线（纯微分法）
    8:  ["Algebra (partial fractions and binomial expansions)", "Integration"],  # 部分分式+积分
    9:  ["Vectors"],                                               # 向量线相交/垂直/交点
    10: ["Complex numbers"],                                       # 复根/Argand/轨迹
}
DIFF = {1:3, 2:2, 3:3, 4:3, 5:3, 6:4, 7:4, 8:4, 9:4, 10:4}

def clean_stem(s):
    s = str(s)
    s = s.replace("\\newline", "")
    s = re.sub(r"\\n\\n", "", s)
    s = s.replace("\\;", " ")
    s = s.replace("\\hfill(", "\\hfill (")
    return s

def cidx(col):
    idx = 0
    for ch in col:
        idx = idx * 26 + (ord(ch) - 64)
    return idx

z = zipfile.ZipFile(XLSX)
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
names = z.namelist()

# sharedStrings
shared = []
if "xl/sharedStrings.xml" in names:
    for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))

# DISPIMG 映射（本文件 cellimages.xml 无 rels / 无 media，仅空壳 → 跳过，figure 留空）
DISPIMG_MEDIA = {}
if "xl/cellimages.xml" in names and "xl/_rels/cellimages.xml.rels" in names:
    cim = z.read("xl/cellimages.xml").decode()
    rels = ET.fromstring(z.read("xl/_rels/cellimages.xml.rels"))
    rid2 = {r.get("Id"): r.get("Target") for r in rels}
    for blk in re.findall(r"<(?:xdr:pic|etc:cellImage)>(.*?)</(?:xdr:pic|etc:cellImage)>", cim, re.S):
        name = re.search(r'<xdr:cNvPr[^>]*name="([^"]+)"', blk) or re.search(r'name="(ID_[^"]+)"', blk)
        emb = re.search(r'r:embed="([^"]+)"', blk)
        if name and emb:
            media = rid2.get(emb.group(1))
            if media:
                DISPIMG_MEDIA[name.group(1)] = media

# 解析 worksheet
data = z.read("xl/worksheets/sheet1.xml").decode("utf-8")
cells = re.findall(r'<c r="([A-Z]+)(\d+)"([^>]*)>(.*?)</c>', data, re.S)
rows = {}
for col, row, attrs, inner in cells:
    r = int(row); c = cidx(col); tval = None
    if 'inlineStr' in attrs:
        m = re.search(r"<t[^>]*>(.*?)</t>", inner, re.S)
        tval = html.unescape(m.group(1)) if m else None
    elif 't="s"' in attrs:
        m = re.search(r"<v>(.*?)</v>", inner, re.S)
        tval = shared[int(m.group(1))] if m else None
    elif 't="str"' in attrs:
        m = re.search(r"<v>(.*?)</v>", inner, re.S)
        tval = m.group(1) if m else None
    else:
        m = re.search(r"<v>(.*?)</v>", inner, re.S)
        tval = m.group(1) if m else None
    if tval is not None:
        rows.setdefault(r, {})[c] = tval

entries = []
for r in sorted(rows):
    if r == 1:
        continue
    row = rows[r]
    src = row.get(2); stem = row.get(3)
    if not src or not stem:
        continue
    parts = str(src).split("_")
    yy, ser, var = parts[0], parts[1], parts[2]
    qno = int(parts[3]) if len(parts) > 3 else int(re.sub(r"\D", "", str(src)))
    year = 2000 + int(yy); month = MONTH[ser]

    # 配图：仅 DISPIMG 提取；数字占位/空/无有效 cellimages → 留空
    figure = ""
    figcell = str(row.get(4) or "")
    dm = re.search(r'DISPIMG\(&quot;([^&]+)&quot;', figcell) or re.search(r'DISPIMG\("([^"]+)"', figcell)
    if dm:
        did = dm.group(1)
        media = DISPIMG_MEDIA.get(did)
        if not media:
            raise SystemExit(f"!! 无法解析 DISPIMG id {did} for {src}")
        figure = f"data/images/{src}.png"
        with open(os.path.join(IMG_DIR, f"{src}.png"), "wb") as f:
            f.write(z.read(f"xl/{media}"))
        print(f"  saved figure {src}.png (<- {media})")

    # 章节：本文件列空或数字占位 → 推断
    ch = row.get(5)
    if ch and not str(ch).isdigit():
        chap = [x.strip() for x in str(ch).split(",") if x.strip()]
    else:
        chap = CHAPTER[qno]

    dval = row.get(7)
    difficulty = int(dval) if (dval and str(dval).isdigit()) else DIFF[qno]

    mval = row.get(8)
    if mval and str(mval).isdigit():
        marks = int(mval)
    else:
        marks = sum(int(x) for x in re.findall(r"\\hfill\s*\((\d+)\)", stem))

    sol = row.get(9) or ""
    if sol and str(sol).isdigit():
        sol = ""  # 数字占位，非真实解析

    stem_clean = clean_stem(stem)
    assert "\\newline" not in stem_clean, f"{src}: literal \\newline remains"
    assert "\\n\\n" not in stem_clean, f"{src}: literal \\n\\n remains"
    assert "\\;" not in stem_clean, f"{src}: literal \\; remains"

    entries.append({
        "id": f"cie_p3_{yy}{ser}{var}_q{qno}",
        "board": "CIE",
        "subject": "P3",
        "chapter": chap,
        "topics": [],
        "difficulty": difficulty,
        "marks": marks,
        "source": str(src),
        "examRef": {
            "year": year, "month": month, "paper": var, "qno": qno,
            "code": var, "label": f"{year} {month} · Paper {var} Q{qno}"
        },
        "stem": stem_clean,
        "figure": figure,
        "solution": sol,
        "createdAt": int(time.time() * 1000),
    })

print(f"Built {len(entries)} entries")
for e in entries:
    print(" ", e["id"], "|", e["chapter"], "| diff", e["difficulty"], "| marks", e["marks"], "| fig", e["figure"] or "-")

# ---- 安全注入 ----
with open(DATAJS, encoding="utf-8") as f:
    data = f.read()
idx = data.index("const SEED_QUESTIONS")
end = data.index("];", idx)
assert end > idx, "]; not found after SEED_QUESTIONS"
new_jsons = [json.dumps(e, ensure_ascii=False, indent=2) for e in entries]
block = ",\n" + ",\n".join(new_jsons) + "\n"
new_data = data[:end] + block + "];" + data[end + 2:]
with open(DATAJS, "w", encoding="utf-8") as f:
    f.write(new_data)
print("Injected. data.js updated.")
