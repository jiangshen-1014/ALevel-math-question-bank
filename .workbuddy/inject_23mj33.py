import re, json, zipfile, time, xml.etree.ElementTree as ET, os

XLSX = r"F:/题库输入表格/CIE P3 录入/23_MJ_33.xlsx"
DATAJS = r"E:/workbuddy/题库软件/assets/js/data.js"
IMG_DIR = r"E:/workbuddy/题库软件/data/images"

NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"
MONTH = {"MJ": "May/June", "FM": "Feb/March", "ON": "Oct/Nov"}

# 章节（模板列空，按内容判定）
CHAPTER = {
    1:  "Logarithmic and exponential functions",
    2:  "Algebra (factor theorem and remainder theorem)",   # polynomial division quotient/remainder
    3:  "Complex numbers",                                   # Argand region
    4:  "Differentiation",                                   # parametric dy/dx
    5:  ["Differentiation", "Numerical solution of equations"],  # max point M + iteration
    6:  "Trigonometry",                                      # R cos(theta-alpha) form
    7:  "Integration",                                       # substitution integral
    8:  "Differential equations",                            # separable DE
    9:  "Vectors",
    10: "Algebra (partial fractions and binomial expansions)",
    11: "Complex numbers",                                   # arg z = -pi/4
}
DIFF = {1:2, 2:2, 3:3, 4:3, 5:3, 6:4, 7:4, 8:4, 9:4, 10:4, 11:4}

# DISPIMG id -> media file (resolved from cellimages.xml + rels)
DISPIMG_MEDIA = {
    'ID_3B4D78DFCFBE4E439EDC4FD34DA4B062': 'image1.png',  # Q5
}

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2))

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
    s = s.replace("\\newline", "")
    s = re.sub(r"\\n\\n", "", s)
    s = s.replace("\\;", " ")
    s = s.replace("\\hfill(", "\\hfill (")
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
    figure = ""
    if figcell and "DISPIMG" in str(figcell):
        m = re.search(r'DISPIMG\("([^"]+)"', str(figcell))
        did = m.group(1) if m else None
        media = DISPIMG_MEDIA.get(did)
        if media:
            figure = f"data/images/{src}.png"
            data_bytes = z.read(f"xl/media/{media}")
            with open(os.path.join(IMG_DIR, f"{src}.png"), "wb") as f:
                f.write(data_bytes)
            print(f"  saved figure {src}.png (<- {media}, {len(data_bytes)} bytes)")
        else:
            raise SystemExit(f"!! cannot resolve DISPIMG id {did} for {src}")
    stem_clean = clean_stem(stem)
    assert "\\newline" not in stem_clean, f"{src}: literal \\newline remains"
    assert "\\n\\n" not in stem_clean, f"{src}: literal \\n\\n remains"
    assert "\\;" not in stem_clean, f"{src}: literal \\; remains"
    ch = CHAPTER[qno]
    entries.append({
        "id": f"cie_p3_{yy}{ser}{var}_q{qno}",
        "board": "CIE",
        "subject": "P3",
        "chapter": ch if isinstance(ch, list) else [ch],
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
    print(" ", e["id"], "|", e["chapter"], "| diff", e["difficulty"], "| marks", e["marks"], "| fig", e["figure"] or "-")

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
