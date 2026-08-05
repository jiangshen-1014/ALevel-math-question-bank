#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re, zipfile, xml.etree.ElementTree as ET
XLSX = r"F:/题库输入表格/CIE S1录入/25_MJ_53.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
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
rid = {r.get("Id"): r.get("Target") for r in rels}
for s in wb.find(f"{NS}sheets"):
    t = rid.get(s.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"))
    t = (t or "").lstrip("/")
    if not t.startswith("xl/"): t = "xl/" + t
    starget = t; break
sx = z.read(starget).decode("utf-8")
if 'xmlns:r=' not in sx[:1000]:
    sx = sx.replace('<worksheet', '<worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"', 1)
root = ET.fromstring(sx)
rows = root.find(f"{NS}sheetData").findall(f"{NS}row")
def cell_val(c):
    t=c.get("t"); v=c.find(f"{NS}v"); isv=c.find(f"{NS}is")
    if t=="s" and v is not None: return shared[int(v.text)]
    if t=="inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
    if v is not None: return v.text
    return None
header={}
for c in rows[0]:
    if not c.get("r"): continue
    ci,_=col_to_idx(c.get("r")); nm=(cell_val(c) or "").strip()
    if nm: header[nm]=ci
def H(*n):
    for x in n:
        if x in header: return header[x]
    return None
col_src=H("来源"); col_stem=H("题干")
for row in rows[1:]:
    cells={}
    for c in row:
        if not c.get("r"): continue
        ci,_=col_to_idx(c.get("r")); cells[ci]=cell_val(c)
    src=cells.get(col_src); stem=cells.get(col_stem)
    if not src or not stem: continue
    if str(src) in ("25_MJ_53_2","25_MJ_53_6"):
        print("="*60); print("来源:",src); print(str(stem))
z.close()
