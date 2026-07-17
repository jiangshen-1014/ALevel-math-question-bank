import re, zipfile, xml.etree.ElementTree as ET

PATH = r"F:/题库输入表格/CIE P3 录入/24_MJ_33.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"
A = "{http://schemas.openxmlformats.org/drawingml/2006/main}"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    letters, row = m.group(1), int(m.group(2))
    idx = 0
    for ch in letters:
        idx = idx * 26 + (ord(ch) - ord('A') + 1)
    return idx, row

z = zipfile.ZipFile(PATH)
print("MEDIA FILES:", [n for n in z.namelist() if n.startswith("xl/media/")])

shared = []
if "xl/sharedStrings.xml" in z.namelist():
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    for si in root.findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))

img_id_to_media = {}
if "xl/cellimages.xml" in z.namelist():
    ci = ET.fromstring(z.read("xl/cellimages.xml"))
    cirels = ET.fromstring(z.read("xl/_rels/cellimages.xml.rels"))
    relmap = {r.get("Id"): r.get("Target") for r in cirels}
    for img in ci.iter(f"{A}picture"):
        cnvpr = img.find(f"{A}nvPicPr/{A}cNvPr")
        iid = cnvpr.get("id") if cnvpr is not None else None
        blip = img.find(f"{A}blip")
        embed = blip.get(f"{RNS}embed") if blip is not None else None
        tgt = relmap.get(embed, "")
        if not tgt.startswith("xl/"):
            tgt = "xl/" + tgt.lstrip("/")
        img_id_to_media[str(iid)] = tgt
print("IMAGE ID -> MEDIA:", img_id_to_media)

wb = ET.fromstring(z.read("xl/workbook.xml"))
rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
rid_to_target = {r.get("Id"): r.get("Target") for r in rels}
sheets_info = []
for s in wb.find(f"{NS}sheets"):
    name = s.get("name"); rid = s.get(RNS); t = rid_to_target.get(rid)
    if not t.startswith("xl/"):
        t = "xl/" + t.lstrip("/")
    sheets_info.append((name, t))
print("SHEETS:", sheets_info)

sname, starget = sheets_info[0]
root = ET.fromstring(z.read(starget))
rows = root.find(f"{NS}sheetData").findall(f"{NS}row")

def cell_val(c):
    t = c.get("t"); v = c.find(f"{NS}v"); isv = c.find(f"{NS}is")
    if t == "s" and v is not None: return shared[int(v.text)]
    if t == "inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
    if v is not None: return v.text
    return None

def rnum(rowel):
    r = rowel.get("r")
    if r and r.isdigit():
        return int(r)
    return None

print("=== HEADER ===")
hdr = {col_to_idx(c.get("r"))[0]: cell_val(c) for c in rows[0]}
for k in sorted(hdr):
    print(f"  col{k}: {hdr.get(k)!r}")

print("=== DATA ROWS ===")
for row in rows[1:]:
    cells = {}
    for c in row:
        ref = c.get("r")
        if not ref: continue
        ci_idx, _ = col_to_idx(ref)
        cells[ci_idx] = cell_val(c)
    if not any(cells.get(c) not in (None, "") for c in cells):
        continue
    rn = rnum(row)
    print(f"\n--- row {rn} ---")
    for c in sorted(cells):
        val = cells[c]
        if val is None: continue
        sv = str(val)
        flags = []
        if "\n" in sv: flags.append("REAL_NL")
        if "\\newline" in sv: flags.append("LIT_NEWLINES")
        if re.search(r"\\n\\n", sv): flags.append("LIT_NN")
        extra = ""
        if "DISPIMG" in sv:
            m = re.search(r'DISPIMG\("([^"]+)"', sv)
            did = m.group(1) if m else "?"
            media = img_id_to_media.get(did, "?")
            extra = f" => IMG_ID={did} => {media}"
        print(f"    col{c} [{flags}]: {repr(sv[:80])}{extra}")
