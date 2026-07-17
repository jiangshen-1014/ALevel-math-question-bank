import re, json, zipfile, time, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE P3 录入/批量录入_CIE_P3_22_MJ_31.xlsx"
DATAJS = r"E:/workbuddy/题库软件/assets/js/data.js"

NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

MONTH = {"MJ": "May/June", "FM": "Feb/March", "ON": "Oct/Nav"}

# 章节/难度 由内容判定（模板列空）。严格对应 CIE|P3 预设；隐函数求导无 Differentiation 章 → 暂归 Algebra 并在报告标注
CHAPTER = {
    1: "Logarithmic and exponential functions",
    2: "Algebra (partial fractions and binomial expansions)",
    3: "Trigonometry",
    4: "Differential equations",
    5: "Algebra (factor theorem and remainder theorem)",
    6: "Integration",
    7: "Complex numbers",
    8: "Algebra",                       # 隐函数求导 x^3+y^3+2xy+8=0 → 预设无 Differentiation，暂归 Algebra（待用户确认/补章）
    9: "Vectors",
    10: "Numerical solution of equations",
}
DIFF = {1: 2, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3, 7: 4, 8: 4, 9: 4, 10: 4}

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    letters, row = m.group(1), int(m.group(2))
    idx = 0
    for ch in letters:
        idx = idx * 26 + (ord(ch) - ord('A') + 1)
    return idx, row

z = zipfile.ZipFile(XLSX)
shared = []
if "xl/sharedStrings.xml" in z.namelist():
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    for si in root.findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))
wb = ET.fromstring(z.read("xl/workbook.xml"))
rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
rid_to_target = {r.get("Id"): r.get("Target") for r in rels}
first = None
for s in wb.find(f"{NS}sheets"):
    t = rid_to_target.get(s.get(RNS))
    if not t.startswith("xl/"):
        t = "xl/" + t.lstrip("/")
    first = t; break
root = ET.fromstring(z.read(first))
rows = root.find(f"{NS}sheetData").findall(f"{NS}row")

def cell_val(c):
    t = c.get("t"); v = c.find(f"{NS}v"); isv = c.find(f"{NS}is")
    if t == "s" and v is not None: return shared[int(v.text)]
    if t == "inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
    if v is not None: return v.text
    return None

def clean_stem(s):
    s = str(s)
    # 铁律：字面 \newline / \n\n 转义 → 真实换行（等价于 Excel alt+enter）
    s = s.replace("\\newline", "\n")
    s = re.sub(r"\\n\\n", "\n\n", s)      # 字面 \n\n → 真实双换行
    s = s.replace("\\;", " ")             # 纯文本 \;（小问标签后的间距）→ 空格
    s = s.replace("\\hfill(", "\\hfill (")  # 规范 \hfill 间距，与现有种子一致
    return s

entries = []
for i, row in enumerate(rows[1:], start=2):
    cells = {col_to_idx(c.get("r"))[0]: cell_val(c) for c in row}
    src = cells.get(2); stem = cells.get(3)
    if not src or not stem:
        continue
    qno = int(str(src).split("_")[-1])
    yy, ser, var = str(src).split("_")[0], str(src).split("_")[1], str(src).split("_")[2]
    year = 2000 + int(yy)
    month = MONTH[ser]
    figcell = cells.get(4)
    figure = f"data/images/{src}.png" if (figcell and "DISPIMG" in str(figcell)) else ""
    stem_clean = clean_stem(stem)
    assert "\\newline" not in stem_clean, f"row{i} still has literal \\newline"
    assert "\\n\\n" not in stem_clean, f"row{i} still has literal \\n\\n"
    assert "\\;" not in stem_clean, f"row{i} still has literal \\;"
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
    print(" ", e["id"], "|", e["chapter"][0], "| diff", e["difficulty"], "| fig", e["figure"] or "-")
    # show stem newline structure
    print("      stem:", repr(e["stem"][:120]))

# ---- 安全注入：在 SEED_QUESTIONS 的 ]; 之前插入，保留 ]; 及之后 Store ----
with open(DATAJS, encoding="utf-8") as f:
    data = f.read()

idx = data.index("const SEED_QUESTIONS")
end = data.index("];", idx)
assert end > idx
new_jsons = [json.dumps(e, ensure_ascii=False, separators=(",", ":")) for e in entries]
block = ",\n" + ",\n".join(new_jsons) + "\n"
new_data = data[:end] + block + "];" + data[end + 2:]

with open(DATAJS, "w", encoding="utf-8") as f:
    f.write(new_data)
print("Injected. data.js updated.")
