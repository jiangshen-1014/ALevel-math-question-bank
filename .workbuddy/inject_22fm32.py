# -*- coding: utf-8 -*-
"""录入 22_FM_32.xlsx -> assets/js/data.js (CIE P3 2022 Feb/March Paper 32)
铁律: 行式插入到 SEED_QUESTIONS 的 ]: 前, 保留其后 Store IIFE; 不截断 Store。
"""
import zipfile, re, html, json, xml.etree.ElementTree as ET, time, os

XLSX = "F:/题库输入表格/CIE P3 录入/22_FM_32.xlsx"
DATA_JS = "assets/js/data.js"
YEAR, MONTH, PAPER, CODE = 2022, "Feb/March", "32", "32"

# ---------- 解析 xlsx ----------
z = zipfile.ZipFile(XLSX)
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
shared = []
if "xl/sharedStrings.xml" in z.namelist():
    for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall(f"{NS}si"):
        shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))

DISPIMG_MEDIA = {}
if "xl/cellimages.xml" in z.namelist() and "xl/_rels/cellimages.xml.rels" in z.namelist():
    cim = z.read("xl/cellimages.xml").decode()
    rels = ET.fromstring(z.read("xl/_rels/cellimages.xml.rels"))
    rid2 = {r.get("Id"): r.get("Target") for r in rels}
    for blk in re.findall(r"<(?:xdr:pic|etc:cellImage)>(.*?)</(?:xdr:pic|etc:cellImage)>", cim, re.S):
        name = re.search(r'<xdr:cNvPr[^>]*name="([^"]+)"', blk) or re.search(r'name="(ID_[^"]+)"', blk)
        emb = re.search(r'r:embed="([^"]+)"', blk)
        if name and emb:
            DISPIMG_MEDIA[name.group(1)] = rid2.get(emb.group(1))
print("DISPIMG 映射:", DISPIMG_MEDIA)

data = z.read('xl/worksheets/sheet1.xml').decode('utf-8')
cells = re.findall(r'<c r="([A-Z]+)(\d+)"([^>]*)>(.*?)</c>', data, re.S)
def cidx(col):
    idx = 0
    for ch in col: idx = idx * 26 + (ord(ch) - 64)
    return idx
rows = {}
for col, row, attrs, inner in cells:
    r = int(row); c = cidx(col); tval = None
    if 'inlineStr' in attrs:
        m = re.search(r'<t[^>]*>(.*?)</t>', inner, re.S); tval = html.unescape(m.group(1)) if m else None
    elif 't="s"' in attrs:
        m = re.search(r'<v>(.*?)</v>', inner, re.S); tval = shared[int(m.group(1))] if m else None
    elif 't="str"' in attrs:
        m = re.search(r'<v>(.*?)</v>', inner, re.S); tval = m.group(1) if m else None
    else:
        m = re.search(r'<v>(.*?)</v>', inner, re.S); tval = m.group(1) if m else None
    if tval is not None:
        rows.setdefault(r, {})[c] = tval

# ---------- 章节/难度推断 (应用 Differentiation 规则) ----------
CHAPTER = {
    '22_FM_32_1':  ["Algebra (modulus functions)"],
    '22_FM_32_2':  ["Complex numbers"],
    '22_FM_32_3':  ["Logarithmic and exponential functions"],
    '22_FM_32_4':  ["Differentiation"],                     # 参数方程求 dy/dx
    '22_FM_32_5':  ["Trigonometry"],
    '22_FM_32_6':  ["Complex numbers"],
    '22_FM_32_7':  ["Numerical solution of equations"],     # 作图证根+夹逼+迭代
    '22_FM_32_8':  ["Algebra (partial fractions and binomial expansions)", "Integration"],
    '22_FM_32_9':  ["Differential equations"],
    '22_FM_32_10': ["Vectors"],
    '22_FM_32_11': ["Differentiation", "Integration"],      # 最大点 dy/dx=0 + 面积积分
}
DIFF = {
    '22_FM_32_1': 3, '22_FM_32_2': 3, '22_FM_32_3': 4, '22_FM_32_4': 3,
    '22_FM_32_5': 4, '22_FM_32_6': 4, '22_FM_32_7': 3, '22_FM_32_8': 4,
    '22_FM_32_9': 4, '22_FM_32_10': 4, '22_FM_32_11': 5,
}

def save_fig(src, dispimg):
    if not dispimg:
        return ""
    media = DISPIMG_MEDIA.get(dispimg)
    if not media:
        return ""
    if not media.startswith('xl/'):
        media = 'xl/' + media.lstrip('/')
    try:
        img = z.read(media)
    except KeyError:
        return ""
    out = f"data/images/{src}.png"
    with open(out, 'wb') as f:
        f.write(img)
    print(f"保存配图: {out} <- {media}")
    return out

def jstr(s):
    return json.dumps(s, ensure_ascii=False)

qs = []
for r in sorted(rows):
    if r == 1:
        continue
    row = rows[r]
    src = row.get(2)
    if not src:
        continue
    stem = row.get(3) or ""
    # \hfill( 统一为 \hfill ( 与库内一致 (用 str.replace 避免正则转义)
    stem = stem.replace('\\hfill (', '\\hfill(').replace('\\hfill(', '\\hfill (')
    fig_raw = str(row.get(4) or "")
    did = re.search(r'DISPIMG\(&quot;([^&]+)&quot;', fig_raw) or re.search(r'DISPIMG\("([^"]+)"', fig_raw)
    dispimg = did.group(1) if did else None
    figpath = save_fig(src, dispimg)
    marks = sum(int(x) for x in re.findall(r'\\hfill\s*\((\d+)\)', stem))
    qno = int(src.split('_')[-1])
    chap = CHAPTER.get(src, ["Differentiation"])
    diff = DIFF.get(src, 3)
    obj = "  \"id\": " + jstr(f"cie_p3_22FM32_q{qno}") + ",\n"
    obj += "  \"board\": \"CIE\",\n"
    obj += "  \"subject\": \"P3\",\n"
    obj += "  \"chapter\": [\n" + ",\n".join(f"    {jstr(c)}" for c in chap) + "\n  ],\n"
    obj += "  \"topics\": [],\n"
    obj += f"  \"difficulty\": {diff},\n"
    obj += f"  \"marks\": {marks},\n"
    obj += "  \"source\": " + jstr(src) + ",\n"
    obj += "  \"examRef\": {\n"
    obj += f"    \"year\": {YEAR},\n"
    obj += f"    \"month\": \"{MONTH}\",\n"
    obj += f"    \"paper\": \"{PAPER}\",\n"
    obj += f"    \"qno\": {qno},\n"
    obj += f"    \"code\": \"{CODE}\",\n"
    obj += "    \"label\": " + jstr(f"{YEAR} {MONTH} · Paper {PAPER} Q{qno}") + "\n"
    obj += "  },\n"
    obj += "  \"stem\": " + jstr(stem) + ",\n"
    obj += "  \"figure\": " + jstr(figpath) + ",\n"
    obj += "  \"solution\": \"\",\n"
    obj += f"  \"createdAt\": {int(time.time()*1000)}\n"
    qs.append("{\n" + obj + "  }")

print(f"\n解析到 {len(qs)} 题")

# ---------- 行式插入 (保留 ]; 后 Store) ----------
js = open(DATA_JS, encoding='utf-8').read()
idx = js.index('];')
# 在 ]; 前插入: 数组末尾是 "  }" + "\n];" -> 改为 "  },\n" + 新块 + "\n];"
block = ",\n" + ",\n".join(qs) + "\n"
new_js = js[:idx] + block + js[idx:]
open(DATA_JS, 'w', encoding='utf-8').write(new_js)
print("已写入 data.js")
