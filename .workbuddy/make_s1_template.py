#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 CIE S1 批量录入模板（11 列，含 配图/配图2/配图3 三图列），无第三方依赖。"""
import zipfile, os

OUT = r"E:/workbuddy/题库软件/批量录入模板_CIE_S1.xlsx"

HEADERS = ["考试局/科目", "来源", "题干", "配图", "配图2", "配图3",
           "章节", "考点", "难度", "分值", "解析"]

# 示例行（配图列留空，由教师在 WPS 中“插入图片到单元格”生成 DISPIMG）
EXAMPLE = {
    "A": "CIE/S1",
    "B": "25MJ31_q1",
    "C": "The numbers of goals scored by a football team in 20 matches are shown below.\n"
         "2, 0, 1, 3, 2, 1, 0, 2, 4, 1, 1, 2, 3, 0, 2, 1, 2, 1, 3, 2\n"
         "Construct a stem-and-leaf diagram to represent the data.\\hfill (3)",
    "G": "Representation of data（数据表示）",
    "I": "2",
    "J": "3",
    "K": "Stem 0|0011..., leaves ordered. Key: 2|3 = 23 goals.",
}

# 章节对照页内容
REF_ROWS = [
    ["CIE S1 章节清单（CHAPTER_PRESETS 权威，录入时填英文原名）"],
    ["1", "Representation of data（数据表示）"],
    ["2", "Permutations & combinations（排列组合）"],
    ["3", "Probability（概率）"],
    ["4", "Discrete random variables（离散随机变量）"],
    ["5", "The normal distribution（正态分布）"],
    ["" , ""],
    ["录入约定"],
    ["来源格式", "YY_SERIES_VARIANT，如 25MJ31_q3（25=2025, MJ=May/June, 31=Paper 31, q3=第3题）"],
    ["月份全称", "MJ=May/June, FM=Feb/March, ON=Oct/Nov（examRef.month 用全称）"],
    ["配图列", "在「配图/配图2/配图3」单元格用 WPS『插入图片到单元格』，每张图自动生成 DISPIMG；注入脚本自动解析并保存为 figure 数组"],
    ["小分标记", "题干内用 \\hfill (N) 紧跟文本，不进 $...$；注入时按 \\hfill 求和得分值"],
    ["章节/考点/难度/分值", "可空→注入时按内容推断；难度给 1–5；分值从 \\hfill 求和"],
    ["题干", "逐字复刻英文原版，不增删改写；(a)(b) 不加粗；真实换行用 Alt+Enter"],
]

def esc(s):
    return (str(s).replace("&", "&amp;").replace("<", "&lt;")
            .replace(">", "&gt;").replace('"', "&quot;"))

def cell(ref, val, style=0, header=False):
    if val == "" or val is None:
        return f'<c r="{ref}" s="{style}"/>'
    t = '<t xml:space="preserve">' + esc(val) + '</t>'
    return f'<c r="{ref}" s="{style}" t="inlineStr"><is>{t}</is></c>'

def col_letter(i):  # 0-based -> A,B,...
    s = ""
    i += 1
    while i:
        i, r = divmod(i - 1, 26)
        s = chr(65 + r) + s
    return s

def build_sheet(rows, col_widths=None, freeze="A2", header_style=True):
    """rows: list of dict {colLetter: value}; first row is header if header_style."""
    out = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    out.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
               'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    if col_widths:
        out.append("<cols>")
        for idx, w in enumerate(col_widths):
            out.append(f'<col min="{idx+1}" max="{idx+1}" width="{w}" customWidth="1"/>')
        out.append("</cols>")
    out.append("<sheetData>")
    for ri, row in enumerate(rows, start=1):
        style = 1 if (header_style and ri == 1) else 0
        cells = []
        for col, val in row.items():
            cells.append(cell(f"{col}{ri}", val, style))
        out.append(f'<row r="{ri}">' + "".join(cells) + "</row>")
    out.append("</sheetData>")
    if freeze:
        out.append(f'<sheetViews><sheetView workbookViewId="0">'
                   f'<pane ySplit="1" topLeftCell="{freeze}" activePane="bottomLeft" state="frozen"/>'
                   f'</sheetView></sheetViews>')
    out.append("</worksheet>")
    return "".join(out)

# sheet1: header + example row
sheet1_rows = []
sheet1_rows.append({col_letter(i): h for i, h in enumerate(HEADERS)})
sheet1_rows.append(EXAMPLE)
widths1 = [14, 14, 52, 14, 14, 14, 34, 22, 8, 8, 40]

# sheet2: reference
sheet2_rows = []
for r in REF_ROWS:
    # r is [colA, colB]
    d = {"A": r[0]}
    if len(r) > 1:
        d["B"] = r[1]
    sheet2_rows.append(d)
widths2 = [22, 80]

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>'''

RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

WORKBOOK = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>
<sheet name="录入" sheetId="1" r:id="rId1"/>
<sheet name="章节对照" sheetId="2" r:id="rId2"/>
</sheets>
</workbook>'''

WREL = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>'''

STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2">
<font><sz val="11"/><name val="Calibri"/></font>
<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
</fonts>
<fills count="3">
<fill><patternFill patternType="none"/></fill>
<fill><patternFill patternType="gray125"/></fill>
<fill><patternFill patternType="solid"><fgColor rgb="FF2563EB"/><bgColor indexed="64"/></patternFill></fill>
</fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="2">
<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
</cellXfs>
</styleSheet>'''

s1 = build_sheet(sheet1_rows, widths1, freeze="A2", header_style=True)
s2 = build_sheet(sheet2_rows, widths2, freeze="A2", header_style=True)

with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    z.writestr("[Content_Types].xml", CONTENT_TYPES)
    z.writestr("_rels/.rels", RELS)
    z.writestr("xl/workbook.xml", WORKBOOK)
    z.writestr("xl/_rels/workbook.xml.rels", WREL)
    z.writestr("xl/styles.xml", STYLES)
    z.writestr("xl/worksheets/sheet1.xml", s1)
    z.writestr("xl/worksheets/sheet2.xml", s2)

print("written:", OUT, os.path.getsize(OUT), "bytes")
