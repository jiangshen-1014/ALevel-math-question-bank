import re, zipfile, xml.etree.ElementTree as ET

PATH = r"F:/题库输入表格/CIE P3 录入/24_MJ_33.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    letters, row = m.group(1), int(m.group(2))
    idx = 0
    for ch in letters:
        idx = idx * 26 + (ord(ch) - ord('A') + 1)
    return idx, row

z = zipfile.ZipFile(PATH)
shared = []
if "xl/sharedStrings.xml" in z.namelist():
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    for si in root.findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))

# media mapping resolved manually from cellimages.xml + rels:
# Q4 -> image2.png, Q9 -> image1.png
DISPIMG_MEDIA = {
    'ID_38DE0BDA95DC441CBA1908046751CF9B': 'image2.png',  # Q4
    'ID_7D4BD8DA8C464B99A8487DB4FCB867CE': 'image1.png',  # Q9
}

wb = ET.fromstring(z.read("xl/workbook.xml"))
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"
rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
rid_to_target = {r.get("Id"): r.get("Target") for r in rels}
starget = None
for s in wb.find(f"{NS}sheets"):
    if s.get("name") == "CIE P3 录入":
        t = rid_to_target.get(s.get(RNS))
        if not t.startswith("xl/"): t = "xl/" + t.lstrip("/")
        starget = t
root = ET.fromstring(z.read(starget))
rows = root.find(f"{NS}sheetData").findall(f"{NS}row")

def cell_val(c):
    t = c.get("t"); v = c.find(f"{NS}v"); isv = c.find(f"{NS}is")
    if t == "s" and v is not None: return shared[int(v.text)]
    if t == "inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
    if v is not None: return v.text
    return None

def clean(s):
    return re.sub(r'\s+', ' ', s)

for row in rows[1:]:
    cells = {}
    for c in row:
        ref = c.get("r")
        if not ref: continue
        ci_idx, _ = col_to_idx(ref)
        cells[ci_idx] = cell_val(c)
    if not cells.get(2):
        continue
    src = cells.get(2)
    stem = cells.get(3) or ""
    figcell = cells.get(4) or ""
    marks = cells.get(8)
    print("="*70)
    print("SRC:", src, "| marks:", marks)
    # figure resolution
    fig = ""
    if "DISPIMG" in figcell:
        m = re.search(r'DISPIMG\("([^"]+)"', figcell)
        did = m.group(1) if m else None
        media = DISPIMG_MEDIA.get(did)
        if media:
            qnum = re.search(r'_(\d+)$', src).group(1)
            fig = f"data/images/24_MJ_33_{qnum}.png  (from {media})"
    print("FIGURE:", fig if fig else "(none)")
    print("STEM:", clean(stem)[:900])
