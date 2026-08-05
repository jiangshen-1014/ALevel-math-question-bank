#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""探查 25_MJ_53.xlsx：每题来源/配图列/分值/章节/难度/题干前若干字"""
import re, os, zipfile, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE S1录入/25_MJ_53.xlsx"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2))

z = zipfile.ZipFile(XLSX)
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
    t = rid_to_target.get(s.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"))
    t = (t or "").lstrip("/")
    if not t.startswith("xl/"): t = "xl/" + t
    starget = t; break
sheet_xml = z.read(starget).decode("utf-8")
if 'xmlns:r=' not in sheet_xml[:1000]:
    sheet_xml = sheet_xml.replace('<worksheet', '<worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"', 1)
root = ET.fromstring(sheet_xml)
rows = root.find(f"{NS}sheetData").findall(f"{NS}row")

def cell_val(c):
    t = c.get("t"); v = c.find(f"{NS}v"); isv = c.find(f"{NS}is")
    if t == "s" and v is not None: return shared[int(v.text)]
    if t == "inlineStr" and isv is not None: return "".join(tt.text or "" for tt in isv.iter(f"{NS}t"))
    if v is not None: return v.text
    return None

header = {}
for c in rows[0]:
    if not c.get("r"): continue
    ci, _ = col_to_idx(c.get("r"))
    nm = (cell_val(c) or "").strip()
    if nm: header[nm] = ci
print("表头:", header)

def H(*names):
    for n in names:
        if n in header: return header[n]
    return None

col_src = H("来源"); col_stem = H("题干"); col_marks = H("分值")
col_ch = H("章节"); col_diff = H("难度"); col_sol = H("解析"); col_fig = H("配图")
fig_cols = sorted(ci for nm, ci in header.items() if nm.startswith("配图"))

for row in rows[1:]:
    cells = {}
    for c in row:
        if not c.get("r"): continue
        ci, _ = col_to_idx(c.get("r"))
        cells[ci] = cell_val(c)
    src = cells.get(col_src); stem = cells.get(col_stem)
    if not src or not stem: continue
    figs = []
    for n, cidx in enumerate(fig_cols):
        cxml = ET.tostring(cells_obj if False else c, encoding="unicode") if False else ""
    print("="*70)
    print(f"来源={src} | 配图列数={len(fig_cols)}")
    # 配图列内容
    for n, cidx in enumerate(fig_cols):
        val = cells.get(cidx)
        dispimgs = re.findall(r'DISPIMG\("([^"]+)"', str(val or ""))
        print(f"  配图列{n+1}(列{chr(64+cidx)})={('有图 '+str(dispimgs)) if dispimgs else '空'}")
    mv = cells.get(col_marks) if col_marks else None
    print(f"  分值列={mv} | 章节列={cells.get(col_ch) if col_ch else '无'} | 难度列={cells.get(col_diff) if col_diff else '无'} | 解析列={'有' if (col_sol and cells.get(col_sol)) else '空'}")
    print("  题干前280字:", (str(stem)[:280]).replace("\n", " \\n "))
z.close()
