import sys, zipfile, re, html, xml.etree.ElementTree as ET
XLSX = sys.argv[1]
z = zipfile.ZipFile(XLSX)
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
names = z.namelist()
shared = []
if "xl/sharedStrings.xml" in names:
    for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))
def cidx(col):
    idx = 0
    for ch in col:
        idx = idx * 26 + (ord(ch) - 64)
    return idx
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
for r in sorted(rows):
    if r == 1:
        # header
        print("HEADER:", {c: rows[r].get(c, '') for c in sorted(rows[r])})
        continue
    row = rows[r]
    src = row.get(2, '')
    sol = row.get(9, '')
    print(f"--- row {r} | src={src!r}")
    print("  SOL:", repr(sol[:400]))
