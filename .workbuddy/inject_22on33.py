import re, json, zipfile, time, html, os

XLSX = r"F:/题库输入表格/CIE P3 录入/22_ON_33.xlsx"
DATAJS = r"E:/workbuddy/题库软件/assets/js/data.js"
IMG_DIR = r"E:/workbuddy/题库软件/data/images"

MONTH = {"MJ": "May/June", "FM": "Feb/March", "ON": "Oct/Nov"}

# 按 qno 推断章节（本文件章节列为空）。新 Differentiation 规则已应用。
CHAPTER = {
    1:  ["Logarithmic and exponential functions"],                  # ln 方程
    2:  ["Algebra (partial fractions and binomial expansions)"],    # 二项式展开
    3:  ["Integration"],                                            # ∫x sec^2 x
    4:  ["Differentiation"],                                        # 参数方程 dy/dx（纯微分法）
    5:  ["Complex numbers"],                                        # Argand 区域 + arg z
    6:  ["Complex numbers"],                                        # 复方程
    7:  ["Trigonometry"],                                           # R cos 形式 + 解
    8:  ["Differentiation", "Numerical solution of equations"],     # 驻点 + 迭代定位
    9:  ["Vectors"],                                               # 向量
    10: ["Differential equations"],                                # 微分方程 dV/dt
    11: ["Algebra (partial fractions and binomial expansions)", "Integration"],  # 部分分式 + 积分
}
DIFF = {1:3, 2:3, 3:3, 4:4, 5:4, 6:4, 7:4, 8:5, 9:4, 10:4, 11:4}

def clean_stem(s):
    s = str(s)
    s = s.replace("\\newline", "")
    s = re.sub(r"\\n\\n", "", s)
    s = s.replace("\\;", " ")
    s = s.replace("\\hfill(", "\\hfill (")
    return s

def cidx(col):
    idx = 0
    for ch in col:
        idx = idx * 26 + (ord(ch) - 64)
    return idx

z = zipfile.ZipFile(XLSX)
sheet = z.read("xl/worksheets/sheet1.xml").decode("utf-8")
cells = re.findall(r'<c r="([A-Z]+)(\d+)"([^>]*)>(.*?)</c>', sheet, re.S)
rows = {}
for col, row, attrs, inner in cells:
    r = int(row); c = cidx(col)
    tval = None
    if "inlineStr" in attrs:
        m = re.search(r"<t[^>]*>(.*?)</t>", inner, re.S)
        if m: tval = html.unescape(m.group(1))
    else:
        m = re.search(r"<v>(.*?)</v>", inner, re.S)
        if m: tval = m.group(1)
    if tval is not None:
        rows.setdefault(r, {})[c] = tval

entries = []
for r in sorted(rows):
    if r == 1:
        continue
    row = rows[r]
    src = row.get(2); stem = row.get(3)
    if not src or not stem:
        continue
    parts = str(src).split("_")
    yy, ser, var = parts[0], parts[1], parts[2]
    qno = int(parts[3]) if len(parts) > 3 else int(re.sub(r"\D", "", str(src)))
    year = 2000 + int(yy)
    month = MONTH[ser]

    # 配图：本文件配图列为数字占位，无 DISPIMG 亦无嵌入图 → figure 留空
    figure = ""

    # 章节：优先列5，否则推断
    ch = row.get(5)
    if ch:
        chap = [x.strip() for x in str(ch).split(",") if x.strip()]
    else:
        chap = CHAPTER[qno]

    # 难度
    dval = row.get(7)
    difficulty = int(dval) if dval else DIFF[qno]

    # marks：优先列8，否则从题干 \hfill(N) 求和
    mval = row.get(8)
    if mval:
        marks = int(mval)
    else:
        marks = sum(int(x) for x in re.findall(r"\\hfill\s*\((\d+)\)", stem))

    # solution
    sol = row.get(9) or ""

    stem_clean = clean_stem(stem)
    assert "\\newline" not in stem_clean, f"{src}: literal \\newline remains"
    assert "\\n\\n" not in stem_clean, f"{src}: literal \\n\\n remains"
    assert "\\;" not in stem_clean, f"{src}: literal \\; remains"

    entries.append({
        "id": f"cie_p3_{yy}{ser}{var}_q{qno}",
        "board": "CIE",
        "subject": "P3",
        "chapter": chap,
        "topics": [],
        "difficulty": difficulty,
        "marks": marks,
        "source": str(src),
        "examRef": {
            "year": year, "month": month, "paper": var, "qno": qno,
            "code": var, "label": f"{year} {month} · Paper {var} Q{qno}"
        },
        "stem": stem_clean,
        "figure": figure,
        "solution": sol,
        "createdAt": int(time.time() * 1000),
    })

print(f"Built {len(entries)} entries")
for e in entries:
    print(" ", e["id"], "|", e["chapter"], "| diff", e["difficulty"], "| marks", e["marks"], "| fig", e["figure"] or "-")

# ---- 安全注入：在 SEED_QUESTIONS 的 ]; 之前插入，保留 ]; 及之后 Store ----
with open(DATAJS, encoding="utf-8") as f:
    data = f.read()
idx = data.index("const SEED_QUESTIONS")
end = data.index("];", idx)
assert end > idx, "]; not found after SEED_QUESTIONS"
new_jsons = [json.dumps(e, ensure_ascii=False, indent=2) for e in entries]
block = ",\n" + ",\n".join(new_jsons) + "\n"
new_data = data[:end] + block + "];" + data[end + 2:]
with open(DATAJS, "w", encoding="utf-8") as f:
    f.write(new_data)
print("Injected. data.js updated.")
