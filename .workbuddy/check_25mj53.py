#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""对比 xlsx 与 data.js 中 25MJ53 的 stem 是否一致（确认是同一卷，避免误判重复）"""
import re, zipfile, xml.etree.ElementTree as ET

XLSX = r"F:/题库输入表格/CIE S1录入/25_MJ_53.xlsx"
DATAJS = r"E:/workbuddy/题库软件/assets/js/data.js"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"

def col_to_idx(ref):
    m = re.match(r"([A-Z]+)(\d+)", ref)
    return sum((ord(ch)-64)*(26**i) for i, ch in enumerate(reversed(m.group(1)))), int(m.group(2))

# ---- xlsx ----
z = zipfile.ZipFile(XLSX)
shared = []
if "xl/sharedStrings.xml" in z.namelist():
    for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))
wb = ET.fromstring(z.read("xl/workbook.xml"))
rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
rid_to_target = {r.get("Id"): r.get("Target") for r in rels}
for s in wb.find(f"{NS}sheets"):
    t = rid_to_target.get(s.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"))
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
col_src=H("来源"); col_stem=H("题干"); col_marks=H("分值"); col_ch=H("章节"); col_diff=H("难度"); col_sol=H("解析")
xlsx_map={}
for row in rows[1:]:
    cells={}
    for c in row:
        if not c.get("r"): continue
        ci,_=col_to_idx(c.get("r")); cells[ci]=cell_val(c)
    src=cells.get(col_src); stem=cells.get(col_stem)
    if not src or not stem: continue
    qno=int(re.sub(r"\D","",str(src)))
    xlsx_map[qno]={"stem":str(stem),"marks":cells.get(col_marks),"ch":cells.get(col_ch),
                   "diff":cells.get(col_diff),"sol":cells.get(col_sol)}
z.close()

# ---- data.js ----
txt=open(DATAJS,encoding="utf-8").read()
start=txt.index("const SEED_QUESTIONS = [")
end=txt.index("];", start)
seg=txt[start:end]
# 按 id 切分对象：定位每个 cie_s1_25MJ53_qN 的 "id" 出现点，取前一个 { 到下一个 { 之前
import re as _re
ids=[(m.start(), _re.search(r'(\d+)', m.group(0)).group(1)) for m in _re.finditer(r'cie_s1_25MJ53_q(\d+)', seg)]
objs={}
for i,(pos,qno) in enumerate(ids):
    # 找对象左括号：向前找最近的 "id" 前的 "{"
    lb=seg.rfind("{", 0, pos)
    rb=seg.find("{", pos+10) if i+1 < len(ids) else len(seg)
    rb=ids[i+1][0] if i+1 < len(ids) else end
    # 重新定位 rb 为该对象末尾 }：从 lb 开始括号匹配
    depth=0; close=None
    for j in range(lb, len(seg)):
        if seg[j]=="{": depth+=1
        elif seg[j]=="}":
            depth-=1
            if depth==0: close=j+1; break
    obj_text=seg[lb:close]
    st=_re.search(r'"stem"\s*:\s*"((?:[^"\\]|\\.)*)"', obj_text)
    ch=_re.search(r'"chapter"\s*:\s*(\[[^\]]*\]|"[^"]*")', obj_text)
    mk=_re.search(r'"marks"\s*:\s*(\d+)', obj_text)
    sol=_re.search(r'"solution"\s*:\s*"([^"]*)"', obj_text)
    objs[int(qno)]={"stem":st.group(1) if st else "","chapter":ch.group(1) if ch else "","marks":mk.group(1) if mk else "","sol":sol.group(1) if sol else ""}

def norm(s): return _re.sub(r"\s+"," ", s or "").strip()
print(f"{'Q':<3}{'xlsx marks':<10}{'db marks':<10}{'stem一致?':<10}章节(db)")
for q in sorted(set(xlsx_map)|set(objs)):
    x=xlsx_map.get(q,{}); d=objs.get(q,{})
    xstem=norm(x.get("stem","")); dstem=norm(d.get("stem",""))
    same = xstem[:200]==dstem[:200] or (xstem and dstem and xstem[:80]==dstem[:80])
    print(f"Q{q:<2} {str(x.get('marks','')):<10} {d.get('marks',''):<10} {('是' if same else '否'):<8} {d.get('chapter','')}")
    if not same:
        print("   xlsx:", xstem[:120])
        print("   db  :", dstem[:120])
