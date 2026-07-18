import zipfile, re, glob, os, xml.etree.ElementTree as ET
BASE = "F:/题库输入表格/CIE P3 录入"
files = sorted(glob.glob(BASE + "/20_*.xlsx") + glob.glob(BASE + "/21_*.xlsx"))
print("文件数:", len(files))
ns = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
for f in files:
    z = zipfile.ZipFile(f)
    names = z.namelist()
    has_shared = "xl/sharedStrings.xml" in names
    has_cim = "xl/cellimages.xml" in names
    has_rels = "xl/_rels/cellimages.xml.rels" in names
    shared = []
    if has_shared:
        for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall(f"{ns}si"):
            shared.append("".join(t.text or "" for t in si.iter(f"{ns}t")))
    data = z.read('xl/worksheets/sheet1.xml').decode('utf-8')
    cells = re.findall(r'<c r="([A-Z]+)(\d+)"([^>]*)>(.*?)</c>', data, re.S)
    rows = {}
    for col, row, attrs, inner in cells:
        if 'inlineStr' in attrs:
            m = re.search(r'<t[^>]*>(.*?)</t>', inner, re.S)
            tv = m.group(1) if m else None
        elif 't="s"' in attrs:
            m = re.search(r'<v>(.*?)</v>', inner, re.S)
            tv = shared[int(m.group(1))] if (m and has_shared) else None
        else:
            m = re.search(r'<v>(.*?)</v>', inner, re.S)
            tv = m.group(1) if m else None
        if tv is not None:
            rows.setdefault(int(row), {})[col] = tv
    srcs = [rows[r].get('B') for r in sorted(rows) if r>1 and rows[r].get('B')]
    print(f"\n=== {os.path.basename(f)} ===")
    print(f"  shared={has_shared} cellimages={has_cim} rels={has_rels}")
    print(f"  源({len(srcs)}): {srcs}")
