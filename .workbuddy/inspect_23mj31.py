import re, zipfile, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE P3 录入/23_MJ_31.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2))

z = zipfile.ZipFile(XLSX)
print("=== namelist (media & cellimages) ===")
for n in z.namelist():
    if "media" in n or "cellimages" in n or "rels" in n:
        print("  ", n)

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

print("=== per-row: src | fig-flags | literal-escape flags ===")
fig_rows = []
for row in rows[1:]:
    cells = {}
    for c in row:
        if not c.get("r"): continue
        ci_idx, _ = col_to_idx(c.get("r"))
        cells[ci_idx] = cell_val(c)
    src = cells.get(2); stem = cells.get(3)
    if not src or not stem:
        continue
    s = str(stem)
    flags = []
    if "\\newline" in s: flags.append("LIT_NEWLINES")
    if re.search(r"\\n\\n", s): flags.append("LIT_NN")
    if "\\;" in s: flags.append("LIT_SEMIC")
    fig = cells.get(4)
    fstr = str(fig) if fig else ""
    has_disp = "DISPIMG" in fstr
    has_real_nl = "\n" in s
    if has_disp:
        fig_rows.append((src, fstr))
    print(f"  {src} | realNL={has_real_nl} | esc={flags} | fig={has_disp}")

print("=== DISPIMG rows ===")
for src, fstr in fig_rows:
    m = re.search(r'DISPIMG\("([^"]+)"', fstr)
    print("  ", src, "->", m.group(1) if m else "??")

print("=== cellimages.xml ===")
print(z.read("xl/cellimages.xml").decode("utf-8", "replace") if "xl/cellimages.xml" in z.namelist() else "NONE")
print("=== cellimages.xml.rels ===")
print(z.read("xl/_rels/cellimages.xml.rels").decode("utf-8", "replace") if "xl/_rels/cellimages.xml.rels" in z.namelist() else "NONE")
