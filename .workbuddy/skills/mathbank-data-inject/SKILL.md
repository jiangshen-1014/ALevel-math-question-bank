---
name: mathbank-data-inject
description: 将 CIE/Edexcel 试卷 xlsx（题干为 DISPIMG 截图或结构化模板）批量录入到题库软件的 assets/js/data.js（SEED_QUESTIONS）。涵盖截图提取、LaTeX 转写、按规范构建条目，以及【绝对安全】的注入方式——绝不可截断文件末尾的 Store IIFE，否则网页白屏。适用于任何向 data.js 追加题目的录入任务。
agent_created: true
---

# 题库软件 data.js 安全录入技能

## 何时使用
用户提交 `*.xlsx`（在 `F:/题库输入表格/...` 或任意路径），要求"录入"。该 xlsx 通常是：
- **模板格式**：含 `CIE P3 录入` 工作表，题干以 `DISPIMG("ID_xxx")` 嵌入截图，另可能含 `Chapters` 表；或
- **原始卷子**：题干已是文本/LaTeX。

目标：把每道题转成 JSON 条目，注入 `assets/js/data.js` 的 `SEED_QUESTIONS` 数组。

## 关键铁律（违反即白屏）
1. **`data.js` 末尾结构**：`const SEED_QUESTIONS = [ ...问答条目... ];` 之后，**紧跟着**完整的 `Store` IIFE（`const Store = (function(){...})();`，内含 `parseExamRef`/`_MONTHS`/`_normMonth` 与 `init/all/upsert/remove/replaceAll`）。这段是 app.js 运行所依赖的，**绝对不能删除或截断**。
2. **注入方式**：只能"在 `];` 之前插入新条目"，保留 `];` 及其后全部内容。**禁止**整体重写文件、禁止以 `];` 为锚点做"替换其后内容"的操作、禁止用会丢失 `];` 之后内容的字符串替换。
3. **改前必备份**：`python .workbuddy/tools/backup.py backup assets/js/data.js`。

## 录入规范
- 题干截图 → **只转 LaTeX**，不把截图当 figure 入库。`figure` 字段**只**存真正的几何/坐标轴配图，写全路径 `data/images/xxx.png`（app.js 渲染不拼前缀），无图则 `""`。
- 题干逐字复刻英文原版；stem 只含原题+数学。解析 `solution` 留空 `""`（除非用户要求写）。
- 小分标记 `\hfill (N)`（JS 中 `\\hfill`），**必须**在题干正文同段落、不包进 `$...$`；禁止 `\tag{N}`。
- 来源月份全称：`examRef.month` → FM=`"Feb/March"`、MJ=`"May/June"`、ON=`"Oct/Nav"`；`label` 含 `"2024 Oct/Nav · Paper 31 Q1"` 格式。
- **小问序号不加粗**：`(a)(b)(c)` 纯文本，绝不写 `**(a)**`。
- **换行符**：stem 段落间用真实 `\n\n`。生成时务必用 `json.dumps(obj, ensure_ascii=False, separators=(",",":"))` 让 Python 自动产出正确的 `\n`（2 字符）。**禁止**手写 `\\n\\n`（4 字符=字面文本，不换行）。
- 每题必填字段：`id`(`cie_p3_YYSSqq_qN`/`edexcel_...`)、`board`、`subject`、`chapter[]`、`source`、`stem`、`figure`、`difficulty`(1–5)、`solution`、`createdAt`(毫秒时间戳)、`examRef`(`year/month/paper/qno/code/label`)、如分小问加 `subMarks[...]`。

## 标准流程

### 1. 解析 xlsx
```python
import openpyxl, zipfile, re, os
src = r"<xlsx路径>"
wb = openpyxl.load_workbook(src, data_only=True)
ws = wb[wb.sheetnames[0]]   # 通常是 "CIE P3 录入"
# 列映射（按实际表头确认）：col2=source, col3=stem(DISPIMG), col4=figure(DISPIMG)
# 解析 cellimages 映射：
z = zipfile.ZipFile(src)
rels = z.read("xl/_rels/cellimages.xml.rels").decode()
rmap = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels))
ci = z.read("xl/cellimages.xml").decode()
names = re.findall(r'<xdr:cNvPr id="\d+" name="([^"]+)"', ci)
embeds = re.findall(r'r:embed="(rId\d+)"', ci)
id2media = {nm: rmap[e] for nm, e in zip(names, embeds)}
# 提取每张截图：media 在 "xl/"+rmap[embed]
```
- 配图错位常见（xlsx 中 fig 可能放在错误行）：提取后**逐张 Read 核对**实际内容，按真实题号命名 `data/images/YY_SS_VV_N.png`，再回填 figure 字段。

### 2. 转写 LaTeX
对每张 `qN_stem.png` 调用 Read 工具视觉识别，逐字转 LaTeX。多张可并行读取。

### 3. 构建条目（Python 脚本，非 heredoc 内联）
- **务必把脚本 Write 成 `.py` 文件再用 `python` 执行**，不要在大段 heredoc 里拼 LaTeX（内联 `$`/`\` 转义极易 SyntaxError）。
- 每个 stem 用 Python **三引号原始字符串** `r"""..."""` 书写，避免 `\` 转义问题。
- 用 `json.dumps(entry, ensure_ascii=False, separators=(",",":"))` 生成每行一个紧凑 JSON 对象。

### 4. 【安全】注入（行式插入，保留 Store）
```python
# 读取 data.js 为行列表
with open("assets/js/data.js", encoding="utf-8") as f:
    lines = f.read().split("\n")
# 找顶层 SEED_QUESTIONS 结束的 ]; 行（唯一顶层 ];）
cut = next(i for i,l in enumerate(lines) if l.strip() == "];")
# 在其前插入新条目（每条后加逗号；最后一条与 ]; 之间也需逗号已由数组语法保证）
new_json_lines = [json.dumps(e, ensure_ascii=False, separators=(",",":")) for e in entries]
# 在 cut 行之前插入，且新条目之间、以及最后一条与 ]; 之间需要逗号：
insert_block = ",\n".join(new_json_lines) + ",\n"
new_lines = lines[:cut] + [insert_block.rstrip("\n")] + lines[cut:]
with open("assets/js/data.js","w",encoding="utf-8") as f:
    f.write("\n".join(new_lines))
```
**要点**：`lines[cut:]`（含 `];` 及之后的 Store IIFE）**原样保留**，绝不丢弃。

### 5. 强制校验（每次注入后必做）
```bash
node --check assets/js/data.js                       # 须 OK
grep -c "const Store = (function" assets/js/data.js   # 须 = 1
grep -o '"id":"' assets/js/data.js | wc -l            # 等于题数（注意缩进条目不以{开头，用python解析更准）
```
更稳的题数校验：
```python
import re, json
c = open("assets/js/data.js", encoding="utf-8").read()
m = re.search(r'const SEED_QUESTIONS\s*=\s*\[(.*?)\n\];', c, re.DOTALL)
qs = json.loads("[" + m.group(1) + "]")
print(len(qs))   # 应为预期总题数
```

### 6. 出错/已截断 Store 的恢复
若发现网页白屏且 `grep -c "const Store = (function"` = 0：
```python
backup = r".workbuddy/backups/data.js/<注入前备份>.js"
cur = "assets/js/data.js"
blines = open(backup, encoding="utf-8").read().split("\n")
clines = open(cur, encoding="utf-8").read().split("\n")
cut = next(i for i,l in enumerate(blines) if l.strip() == "];")
store_seg = "\n".join(blines[cut+1:])          # ]; 之后的 Store 段落
# 当前文件应以 ]; 结尾
assert open(cur).read().rstrip("\n").endswith("];")
new = open(cur).read().rstrip("\n") + "\n\n" + store_seg.rstrip("\n") + "\n"
open(cur,"w",encoding="utf-8").write(new)
# 再 node --check + grep Store 确认
```
注入前备份（含 Store）可在 `.workbuddy/backups/data.js/` 找到。

## 收尾
- 录入完成 → 向用户汇报题数/分值/配图/规范应用情况。
- 提交 Git：`git add assets/js/data.js data/images/ && git commit -m "..." && git push origin main`（MacBook 端 `git pull` 同步）。
- 写 `.workbuddy/memory/2026-MM-DD.md` 当日日志。
