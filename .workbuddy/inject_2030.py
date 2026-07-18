# -*- coding: utf-8 -*-
"""录入 20/21 系列 14 个 CIE P3 xlsx -> assets/js/data.js
铁律: 行式插入到 SEED_QUESTIONS 的 ]; 前, 保留其后 Store IIFE; 不截断 Store。
章节按题干内容 + Differentiation 规则判定; 空列则推断 (本批已全量手写 CHAPTER/DIFF)。
"""
import zipfile, re, glob, os, time, json, xml.etree.ElementTree as ET

BASE = "F:/题库输入表格/CIE P3 录入"
DATA_JS = "assets/js/data.js"
NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"

# (文件名, YEAR, MONTH, PAPER, CODE)
FILES = [
    ("20_FM_32.xlsx", 2020, "Feb/March", "32", "32"),
    ("20_MJ_31.xlsx", 2020, "May/June",  "31", "31"),
    ("20_MJ_32.xlsx", 2020, "May/June",  "32", "32"),
    ("20_MJ_33.xlsx", 2020, "May/June",  "33", "33"),
    ("20_ON_31.xlsx", 2020, "Oct/Nov",   "31", "31"),
    ("20_ON_32.xlsx", 2020, "Oct/Nov",   "32", "32"),
    ("20_ON_33.xlsx", 2020, "Oct/Nov",   "33", "33"),
    ("21_FM_32.xlsx", 2021, "Feb/March", "32", "32"),
    ("21_MJ_31.xlsx", 2021, "May/June",  "31", "31"),
    ("21_MJ_32.xlsx", 2021, "May/June",  "32", "32"),
    ("21_MJ_33.xlsx", 2021, "May/June",  "33", "33"),
    ("21_ON_31.xlsx", 2021, "Oct/Nov",   "31", "31"),
    ("21_ON_32.xlsx", 2021, "Oct/Nov",   "32", "32"),
    ("21_ON_33.xlsx", 2021, "Oct/Nov",   "33", "33"),
]

# ---------- 章节 / 难度 (按 src 全量手写) ----------
CHAPTER = {
 # 20_FM_32
 "20_FM_32_1": ["Algebra (modulus functions)"],
 "20_FM_32_2": ["Logarithmic and exponential functions"],
 "20_FM_32_3": ["Numerical solution of equations"],
 "20_FM_32_4": ["Integration"],
 "20_FM_32_5": ["Trigonometry"],
 "20_FM_32_6": ["Differential equations"],
 "20_FM_32_7": ["Differentiation"],
 "20_FM_32_8": ["Vectors"],
 "20_FM_32_9": ["Algebra (partial fractions and binomial expansions)"],
 "20_FM_32_10": ["Complex numbers"],
 # 20_MJ_31
 "20_MJ_31_1": ["Logarithmic and exponential functions"],
 "20_MJ_31_2": ["Algebra (partial fractions and binomial expansions)"],
 "20_MJ_31_3": ["Trigonometry"],
 "20_MJ_31_4": ["Differentiation"],
 "20_MJ_31_5": ["Algebra (factor theorem and remainder theorem)", "Integration"],
 "20_MJ_31_6": ["Numerical solution of equations"],
 "20_MJ_31_7": ["Differentiation", "Integration"],
 "20_MJ_31_8": ["Differential equations"],
 "20_MJ_31_9": ["Vectors"],
 "20_MJ_31_10": ["Complex numbers"],
 # 20_MJ_32
 "20_MJ_32_1": ["Algebra (factor theorem and remainder theorem)"],
 "20_MJ_32_2": ["Logarithmic and exponential functions"],
 "20_MJ_32_3": ["Integration"],
 "20_MJ_32_4": ["Differentiation"],
 "20_MJ_32_5": ["Trigonometry"],
 "20_MJ_32_6": ["Differentiation", "Integration"],
 "20_MJ_32_7": ["Differential equations"],
 "20_MJ_32_8": ["Complex numbers"],
 "20_MJ_32_9": ["Differentiation", "Numerical solution of equations"],
 "20_MJ_32_10": ["Vectors"],
 # 20_MJ_33
 "20_MJ_33_1": ["Algebra (modulus functions)"],
 "20_MJ_33_2": ["Integration"],
 "20_MJ_33_3": ["Logarithmic and exponential functions"],
 "20_MJ_33_4": ["Differentiation"],
 "20_MJ_33_5": ["Trigonometry"],
 "20_MJ_33_6": ["Numerical solution of equations"],
 "20_MJ_33_7": ["Algebra (partial fractions and binomial expansions)", "Integration"],
 "20_MJ_33_8": ["Vectors"],
 "20_MJ_33_9": ["Complex numbers"],
 "20_MJ_33_10": ["Differential equations"],
 # 20_ON_31
 "20_ON_31_1": ["Algebra (modulus functions)"],
 "20_ON_31_2": ["Complex numbers"],
 "20_ON_31_3": ["Differentiation"],
 "20_ON_31_4": ["Logarithmic and exponential functions"],
 "20_ON_31_5": ["Numerical solution of equations"],
 "20_ON_31_6": ["Trigonometry"],
 "20_ON_31_7": ["Complex numbers"],
 "20_ON_31_8": ["Differential equations"],
 "20_ON_31_9": ["Algebra (partial fractions and binomial expansions)"],
 "20_ON_31_10": ["Differentiation", "Integration"],
 "20_ON_31_11": ["Vectors"],
 # 20_ON_32
 "20_ON_32_1": ["Logarithmic and exponential functions"],
 "20_ON_32_2": ["Algebra (partial fractions and binomial expansions)"],
 "20_ON_32_3": ["Logarithmic and exponential functions"],
 "20_ON_32_4": ["Trigonometry"],
 "20_ON_32_5": ["Differentiation"],
 "20_ON_32_6": ["Complex numbers"],
 "20_ON_32_7": ["Differential equations"],
 "20_ON_32_8": ["Vectors"],
 "20_ON_32_9": ["Algebra (partial fractions and binomial expansions)", "Integration"],
 "20_ON_32_10": ["Differentiation", "Integration", "Numerical solution of equations"],
 # 20_ON_33 (题干同 20_ON_31)
 "20_ON_33_1": ["Algebra (modulus functions)"],
 "20_ON_33_2": ["Complex numbers"],
 "20_ON_33_3": ["Differentiation"],
 "20_ON_33_4": ["Logarithmic and exponential functions"],
 "20_ON_33_5": ["Numerical solution of equations"],
 "20_ON_33_6": ["Trigonometry"],
 "20_ON_33_7": ["Complex numbers"],
 "20_ON_33_8": ["Differential equations"],
 "20_ON_33_9": ["Algebra (partial fractions and binomial expansions)"],
 "20_ON_33_10": ["Differentiation", "Integration"],
 "20_ON_33_11": ["Vectors"],
 # 21_FM_32
 "21_FM_32_1": ["Logarithmic and exponential functions"],
 "21_FM_32_2": ["Algebra (factor theorem and remainder theorem)"],
 "21_FM_32_3": ["Trigonometry"],
 "21_FM_32_4": ["Differential equations"],
 "21_FM_32_5": ["Trigonometry"],
 "21_FM_32_6": ["Algebra (partial fractions and binomial expansions)", "Integration"],
 "21_FM_32_7": ["Vectors"],
 "21_FM_32_8": ["Complex numbers"],
 "21_FM_32_9": ["Differentiation", "Numerical solution of equations"],
 "21_FM_32_10": ["Differentiation", "Integration"],
 # 21_MJ_31
 "21_MJ_31_1": ["Algebra (modulus functions)"],
 "21_MJ_31_2": ["Logarithmic and exponential functions"],
 "21_MJ_31_3": ["Trigonometry"],
 "21_MJ_31_4": ["Trigonometry", "Integration"],
 "21_MJ_31_5": ["Complex numbers"],
 "21_MJ_31_6": ["Differentiation"],
 "21_MJ_31_7": ["Differentiation", "Numerical solution of equations"],
 "21_MJ_31_8": ["Vectors"],
 "21_MJ_31_9": ["Differentiation", "Integration"],
 "21_MJ_31_10": ["Differential equations"],
 # 21_MJ_32
 "21_MJ_32_1": ["Algebra (modulus functions)"],
 "21_MJ_32_2": ["Complex numbers"],
 "21_MJ_32_3": ["Logarithmic and exponential functions"],
 "21_MJ_32_4": ["Integration"],
 "21_MJ_32_5": ["Complex numbers"],
 "21_MJ_32_6": ["Trigonometry", "Integration"],
 "21_MJ_32_7": ["Differential equations"],
 "21_MJ_32_8": ["Differentiation"],
 "21_MJ_32_9": ["Algebra (partial fractions and binomial expansions)"],
 "21_MJ_32_10": ["Numerical solution of equations"],
 "21_MJ_32_11": ["Vectors"],
 # 21_MJ_33
 "21_MJ_33_1": ["Algebra (partial fractions and binomial expansions)"],
 "21_MJ_33_2": ["Logarithmic and exponential functions"],
 "21_MJ_33_3": ["Differentiation"],
 "21_MJ_33_4": ["Algebra (partial fractions and binomial expansions)", "Integration"],
 "21_MJ_33_5": ["Trigonometry"],
 "21_MJ_33_6": ["Numerical solution of equations"],
 "21_MJ_33_7": ["Differential equations"],
 "21_MJ_33_8": ["Differentiation", "Integration"],
 "21_MJ_33_9": ["Vectors"],
 "21_MJ_33_10": ["Complex numbers"],
 # 21_ON_31
 "21_ON_31_1": ["Algebra (modulus functions)"],
 "21_ON_31_2": ["Trigonometry"],
 "21_ON_31_3": ["Differentiation"],
 "21_ON_31_4": ["Integration"],
 "21_ON_31_5": ["Trigonometry"],
 "21_ON_31_6": ["Algebra (partial fractions and binomial expansions)"],
 "21_ON_31_7": ["Differential equations"],
 "21_ON_31_8": ["Integration", "Numerical solution of equations"],
 "21_ON_31_9": ["Vectors"],
 "21_ON_31_10": ["Complex numbers"],
 # 21_ON_32
 "21_ON_32_1": ["Logarithmic and exponential functions"],
 "21_ON_32_2": ["Algebra (modulus functions)"],
 "21_ON_32_3": ["Complex numbers"],
 "21_ON_32_4": ["Algebra (partial fractions and binomial expansions)"],
 "21_ON_32_5": ["Complex numbers"],
 "21_ON_32_6": ["Trigonometry", "Integration"],
 "21_ON_32_7": ["Differential equations"],
 "21_ON_32_8": ["Trigonometry"],
 "21_ON_32_9": ["Differentiation"],
 "21_ON_32_10": ["Vectors"],
 "21_ON_32_11": ["Differentiation", "Numerical solution of equations"],
 # 21_ON_33
 "21_ON_33_1": ["Algebra (factor theorem and remainder theorem)"],
 "21_ON_33_2": ["Algebra (modulus functions)"],
 "21_ON_33_3": ["Logarithmic and exponential functions"],
 "21_ON_33_4": ["Integration"],
 "21_ON_33_5": ["Trigonometry"],
 "21_ON_33_6": ["Trigonometry"],
 "21_ON_33_7": ["Differentiation"],
 "21_ON_33_8": ["Vectors"],
 "21_ON_33_9": ["Differentiation", "Integration"],
 "21_ON_33_10": ["Differential equations", "Numerical solution of equations"],
 "21_ON_33_11": ["Complex numbers"],
}
DIFF = {
 "20_FM_32_1":3,"20_FM_32_2":3,"20_FM_32_3":4,"20_FM_32_4":4,"20_FM_32_5":4,"20_FM_32_6":4,"20_FM_32_7":5,"20_FM_32_8":4,"20_FM_32_9":4,"20_FM_32_10":4,
 "20_MJ_31_1":3,"20_MJ_31_2":3,"20_MJ_31_3":4,"20_MJ_31_4":4,"20_MJ_31_5":5,"20_MJ_31_6":4,"20_MJ_31_7":5,"20_MJ_31_8":4,"20_MJ_31_9":4,"20_MJ_31_10":5,
 "20_MJ_32_1":3,"20_MJ_32_2":4,"20_MJ_32_3":4,"20_MJ_32_4":4,"20_MJ_32_5":4,"20_MJ_32_6":5,"20_MJ_32_7":4,"20_MJ_32_8":4,"20_MJ_32_9":5,"20_MJ_32_10":4,
 "20_MJ_33_1":3,"20_MJ_33_2":4,"20_MJ_33_3":4,"20_MJ_33_4":4,"20_MJ_33_5":4,"20_MJ_33_6":4,"20_MJ_33_7":5,"20_MJ_33_8":4,"20_MJ_33_9":4,"20_MJ_33_10":5,
 "20_ON_31_1":3,"20_ON_31_2":4,"20_ON_31_3":4,"20_ON_31_4":4,"20_ON_31_5":4,"20_ON_31_6":4,"20_ON_31_7":4,"20_ON_31_8":4,"20_ON_31_9":4,"20_ON_31_10":5,"20_ON_31_11":5,
 "20_ON_32_1":3,"20_ON_32_2":3,"20_ON_32_3":4,"20_ON_32_4":4,"20_ON_32_5":5,"20_ON_32_6":4,"20_ON_32_7":4,"20_ON_32_8":4,"20_ON_32_9":5,"20_ON_32_10":5,
 "20_ON_33_1":3,"20_ON_33_2":4,"20_ON_33_3":4,"20_ON_33_4":4,"20_ON_33_5":4,"20_ON_33_6":4,"20_ON_33_7":4,"20_ON_33_8":4,"20_ON_33_9":4,"20_ON_33_10":5,"20_ON_33_11":5,
 "21_FM_32_1":3,"21_FM_32_2":4,"21_FM_32_3":4,"21_FM_32_4":4,"21_FM_32_5":4,"21_FM_32_6":4,"21_FM_32_7":4,"21_FM_32_8":4,"21_FM_32_9":5,"21_FM_32_10":5,
 "21_MJ_31_1":3,"21_MJ_31_2":4,"21_MJ_31_3":4,"21_MJ_31_4":4,"21_MJ_31_5":4,"21_MJ_31_6":5,"21_MJ_31_7":5,"21_MJ_31_8":4,"21_MJ_31_9":5,"21_MJ_31_10":5,
 "21_MJ_32_1":3,"21_MJ_32_2":4,"21_MJ_32_3":4,"21_MJ_32_4":4,"21_MJ_32_5":4,"21_MJ_32_6":4,"21_MJ_32_7":4,"21_MJ_32_8":5,"21_MJ_32_9":4,"21_MJ_32_10":5,"21_MJ_32_11":5,
 "21_MJ_33_1":3,"21_MJ_33_2":4,"21_MJ_33_3":5,"21_MJ_33_4":4,"21_MJ_33_5":4,"21_MJ_33_6":4,"21_MJ_33_7":5,"21_MJ_33_8":5,"21_MJ_33_9":4,"21_MJ_33_10":4,
 "21_ON_31_1":4,"21_ON_31_2":4,"21_ON_31_3":4,"21_ON_31_4":4,"21_ON_31_5":4,"21_ON_31_6":4,"21_ON_31_7":4,"21_ON_31_8":5,"21_ON_31_9":4,"21_ON_31_10":5,
 "21_ON_32_1":3,"21_ON_32_2":3,"21_ON_32_3":4,"21_ON_32_4":4,"21_ON_32_5":4,"21_ON_32_6":4,"21_ON_32_7":4,"21_ON_32_8":4,"21_ON_32_9":5,"21_ON_32_10":4,"21_ON_32_11":5,
 "21_ON_33_1":3,"21_ON_33_2":3,"21_ON_33_3":4,"21_ON_33_4":4,"21_ON_33_5":4,"21_ON_33_6":5,"21_ON_33_7":4,"21_ON_33_8":4,"21_ON_33_9":5,"21_ON_33_10":5,"21_ON_33_11":4,
}

def cidx(col):
    idx = 0
    for ch in col:
        idx = idx * 26 + (ord(ch) - 64)
    return idx

def jstr(s):
    return json.dumps(s, ensure_ascii=False)

def parse_file(path, YEAR, MONTH, PAPER, CODE, DRYRUN):
    z = zipfile.ZipFile(path)
    names = z.namelist()
    has_shared = "xl/sharedStrings.xml" in names
    shared = []
    if has_shared:
        for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall(f"{NS}si"):
            shared.append("".join(t.text or "" for t in si.iter(f"{NS}t")))
    DISPIMG_MEDIA = {}
    if "xl/cellimages.xml" in names and "xl/_rels/cellimages.xml.rels" in names:
        cim = z.read("xl/cellimages.xml").decode()
        rels = ET.fromstring(z.read("xl/_rels/cellimages.xml.rels"))
        rid2 = {r.get("Id"): r.get("Target") for r in rels}
        for blk in re.findall(r"<(?:xdr:pic|etc:cellImage)>(.*?)</(?:xdr:pic|etc:cellImage)>", cim, re.S):
            name = re.search(r'<xdr:cNvPr[^>]*name="([^"]+)"', blk) or re.search(r'name="(ID_[^"]+)"', blk)
            emb = re.search(r'r:embed="([^"]+)"', blk)
            if name and emb:
                DISPIMG_MEDIA[name.group(1)] = rid2.get(emb.group(1))
    data = z.read('xl/worksheets/sheet1.xml').decode('utf-8')
    cells = re.findall(r'<c r="([A-Z]+)([0-9]+)"([^>]*)>(.*?)</c>', data, re.S)
    rows = {}
    for col, row, attrs, inner in cells:
        if 'inlineStr' in attrs:
            m = re.search(r'<t[^>]*>(.*?)</t>', inner, re.S); tv = m.group(1) if m else None
        elif 't="s"' in attrs:
            m = re.search(r'<v>(.*?)</v>', inner, re.S); tv = shared[int(m.group(1))] if (m and has_shared) else None
        else:
            m = re.search(r'<v>(.*?)</v>', inner, re.S); tv = m.group(1) if m else None
        if tv is not None:
            rows.setdefault(int(row), {})[col] = tv
    qs = []
    sheet_dispimgs = 0
    for r in sorted(rows):
        if r == 1:
            continue
        row = rows[r]
        src = row.get('B')
        if not src:
            continue
        stem = row.get('C') or ""
        # 统一 \hfill( -> \hfill ( 与库内一致
        stem = stem.replace('\\hfill (', '\\hfill(').replace('\\hfill(', '\\hfill (')
        fig_raw = str(row.get('D') or "")
        did = re.search(r'DISPIMG\(&quot;([^&]+)&quot;', fig_raw) or re.search(r'DISPIMG\("([^"]+)"', fig_raw)
        dispimg = did.group(1) if did else None
        if dispimg:
            sheet_dispimgs += 1
        figpath = ""
        if dispimg:
            media = DISPIMG_MEDIA.get(dispimg)
            if media:
                if not media.startswith('xl/'):
                    media = 'xl/' + media.lstrip('/')
                try:
                    img = z.read(media)
                    figpath = f"data/images/{src}.png"
                    if not DRYRUN:
                        with open(figpath, 'wb') as f:
                            f.write(img)
                except KeyError:
                    print(f"  !! 图片缺失 {src}: {media}")
            else:
                print(f"  !! 未映射 DISPIMG {src}: {dispimg}")
        marks = sum(int(x) for x in re.findall(r'\\hfill\s*\(([0-9]+)\)', stem))
        qno = int(src.split('_')[-1])
        chap = CHAPTER.get(src)
        diff = DIFF.get(src)
        if chap is None or diff is None:
            print(f"  !! 缺 CHAPTER/DIFF: {src}")
            chap = chap or ["Differentiation"]
            diff = diff or 3
        # id: cie_p3_20FM32_q1 形式
        yys = src.split('_')
        idv = f"cie_p3_{yys[0]}{yys[1]}{yys[2]}_q{qno}"
        obj = '  "id": ' + jstr(idv) + ',\n'
        obj += '  "board": "CIE",\n'
        obj += '  "subject": "P3",\n'
        obj += '  "chapter": [\n' + ',\n'.join(f'    {jstr(c)}' for c in chap) + '\n  ],\n'
        obj += '  "topics": [],\n'
        obj += f'  "difficulty": {diff},\n'
        obj += f'  "marks": {marks},\n'
        obj += '  "source": ' + jstr(src) + ',\n'
        obj += '  "examRef": {\n'
        obj += f'    "year": {YEAR},\n'
        obj += f'    "month": "{MONTH}",\n'
        obj += f'    "paper": "{PAPER}",\n'
        obj += f'    "qno": {qno},\n'
        obj += f'    "code": "{CODE}",\n'
        obj += '    "label": ' + jstr(f"{YEAR} {MONTH} · Paper {PAPER} Q{qno}") + '\n'
        obj += '  },\n'
        obj += '  "stem": ' + jstr(stem) + ',\n'
        obj += '  "figure": ' + jstr(figpath) + ',\n'
        obj += '  "solution": "",\n'
        obj += f'  "createdAt": {int(time.time()*1000)}\n'
        qs.append('{\n' + obj + '  }')
    return qs, src, sheet_dispimgs, len(DISPIMG_MEDIA)

if __name__ == "__main__":
    import sys
    DRYRUN = "--write" not in sys.argv
    all_qs = []
    total = 0
    for (fn, Y, M, P, C) in FILES:
        path = os.path.join(BASE, fn)
        qs, last_src, sd, mapped = parse_file(path, Y, M, P, C, DRYRUN)
        total += len(qs)
        mode = "DRYRUN" if DRYRUN else "WRITE"
        print(f"[{mode}] {fn}: {len(qs)} 题, sheet DISPIMG={sd}, mapped images={mapped}")
        all_qs.extend(qs)
    print(f"\n总计将录入 {total} 题")
    if DRYRUN:
        print("（DRYRUN 模式，未写入。加 --write 执行实际录入）")
        sys.exit(0)
    # ---------- 实际写入 ----------
    js = open(DATA_JS, encoding='utf-8').read()
    # 存在性检查 (稳健正则, 兼容紧凑/展开)
    existing = set(re.findall(r'(?:id|"id")\s*:\s*"([^"]+)"', js))
    new_ids = [re.search(r'"id":\s*"([^"]+)"', q).group(1) for q in all_qs]
    dup_existing = [i for i in new_ids if i in existing]
    if dup_existing:
        print(f"!! 存在性检查失败, 以下 id 已存在: {dup_existing[:10]}")
        sys.exit(1)
    dup_self = [i for i in set(new_ids) if new_ids.count(i) > 1]
    if dup_self:
        print(f"!! 批次内重复 id: {dup_self}")
        sys.exit(1)
    idx = js.index('];')
    block = ",\n" + ",\n".join(all_qs) + "\n"
    new_js = js[:idx] + block + js[idx:]
    open(DATA_JS, 'w', encoding='utf-8').write(new_js)
    print("已写入 data.js")
