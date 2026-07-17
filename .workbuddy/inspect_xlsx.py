import re, zipfile, xml.etree.ElementTree as ET

PATH = r"F:/题库输入表格/CIE P3 录入/批量录入_CIE_P3_22_MJ_31.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
RNS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

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
wb = ET.fromstring(z.read("xl/workbook.xml"))
rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
rid_to_target = {r.get("Id"): r.get("Target") for r in rels}
sheets_info = []
for s in wb.find(f"{NS}sheets"):
    name = s.get("name"); rid = s.get(RNS)
    t = rid_to_target.get(rid)
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

hdr = [cell_val(c) for c in rows[0]]
print("HEADER:", hdr)
for i, row in enumerate(rows[1:], start=2):
    cells = {col_to_idx(c.get("r"))[0]: cell_val(c) for c in row}
    q = cells.get(2); stem = cells.get(3); fig = cells.get(4)
    ch = cells.get(5); diff = cells.get(7); marks = cells.get(8)
    if not stem:
        continue
    s = str(stem)
    print(f"--- row{i} ---")
    print("  来源:", repr(q))
    print("  配图:", repr(fig))
    print("  章节:", repr(ch))
    print("  难度:", repr(diff), " 分值:", repr(marks))
    print("  stem_flags:", ("LIT_NEWLINES" if "\\newline" in s else ""),
          ("LIT_NN" if re.search(r"\\n\\n", s) else ""),
          ("REAL_NL" if "\n" in s else ""))
