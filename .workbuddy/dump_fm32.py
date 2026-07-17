import re, zipfile, xml.etree.ElementTree as ET

PATH = r"F:/题库输入表格/CIE P3 录入/24_FM_32.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return (0, 0) if not m else (sum((ord(ch)-64)*(26**i) for i,ch in enumerate(reversed(m.group(1)))), int(m.group(2)))

z = zipfile.ZipFile(PATH)
shared = []
if "xl/sharedStrings.xml" in z.namelist():
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    for si in root.findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))
wb = ET.fromstring(z.read("xl/workbook.xml"))
rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
rid_to_target = {r.get("Id"): r.get("Target") for r in rels}
sname, starget = None, None
for s in wb.find(f"{NS}sheets"):
    t = rid_to_target.get(s.get(RNS))
    if not t.startswith("xl/"): t = "xl/" + t.lstrip("/")
    if sname is None: sname, starget = s.get("name"), t
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
    if not any(cells.get(c) not in (None,"") for c in (2,3)): continue
    src = cells.get(2); stem = cells.get(3)
    print("="*70)
    print("SRC:", src, "| marks:", cells.get(8))
    print("RAW STEM:")
    print(stem)
    print("--- flags: REAL_NL" , ("\n" in str(stem)),
          "| LIT_NEWLINES", ("\\newline" in str(stem)),
          "| LIT_NN", bool(re.search(r"\\n\\n", str(stem))))
