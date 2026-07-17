import re, zipfile, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE P3 录入/23_MJ_32.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2))

z = zipfile.ZipFile(XLSX)
shared = []
if "xl/sharedStrings.xml" in z.namelist():
    for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall(f"{NS}si"):
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

for row in rows[1:]:
    cells = {}
    for c in row:
        if not c.get("r"): continue
        ci_idx, _ = col_to_idx(c.get("r"))
        cells[ci_idx] = cell_val(c)
    src = cells.get(2); stem = cells.get(3)
    if not src or not stem:
        continue
    marks = cells.get(8)
    stem_s = re.sub(r"\s*\n\s*", " \u23ce ", str(stem))
    print(f"==== {src} | marks={marks} | fig={'Y' if cells.get(4) and 'DISPIMG' in str(cells.get(4)) else '-'} ====")
    print(" ", stem_s[:600])
    print()
