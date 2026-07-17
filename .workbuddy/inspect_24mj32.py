import re, zipfile, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE P3 录入/24_MJ_32.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

z = zipfile.ZipFile(XLSX)
print("=== ZIP members (media) ===")
for n in z.namelist():
    if "media" in n or "cellimages" in n or "drawing" in n:
        print("  ", n)

# shared strings
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
print("=== sheet target:", starget, "===")
root = ET.fromstring(z.read(starget))
rows = root.find(f"{NS}sheetData").findall(f"{NS}row")

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2))

def cell_val(c):
    t = c.get("t"); v = c.find(f"{NS}v"); isv = c.find(f"{NS}is")
    if t == "s" and v is not None: return shared[int(v.text)]
    if t == "inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
    if v is not None: return v.text
    return None

# header
hdr = rows[0]
hc = {col_to_idx(c.get("r"))[0]: (c.get("r"), cell_val(c)) for c in hdr}
print("=== header (col -> value) ===")
for k in sorted(hc):
    print("  ", hc[k][0], "=>", repr(hc[k][1])[:30])

print("=== rows ===")
for row in rows[1:]:
    cells = {}
    for c in row:
        if not c.get("r"): continue
        ci_idx, _ = col_to_idx(c.get("r"))
        cells[ci_idx] = cell_val(c)
    src = cells.get(2); stem = cells.get(3)
    if not src:
        continue
    s = str(stem) if stem else ""
    flags = []
    if "\n" in s: flags.append("REAL_NL")
    if "\\newline" in s: flags.append("LIT_NEWLINES")
    if re.search(r"\\n\\n", s): flags.append("LIT_NN")
    if "\\;" in s: flags.append("LIT_SEMIC")
    fig = cells.get(4)
    figtxt = (str(fig)[:40] if fig else None)
    has_disp = fig and "DISPIMG" in str(fig)
    print(f"--- {src} | flags={flags} | col5(ch) = {repr(cells.get(5))[:20]} col7(diff)={cells.get(7)} col8(marks)={cells.get(8)} | fig={figtxt} dispimg={has_disp}")
    print("    stem:", repr(s[:300]))

# resolve cellimages mapping
print("=== cellimages.xml ===")
if "xl/cellimages.xml" in z.namelist():
    ci = z.read("xl/cellimages.xml").decode("utf-8", "replace")
    print(ci[:1500])
    print("=== cellimages.xml.rels ===")
    print(z.read("xl/_rels/cellimages.xml.rels").decode("utf-8", "replace"))
