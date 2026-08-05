# 题库软件项目长期约定（Edexcel/CIE 数学）

## 录入规范（铁律）
- **存在性检查**：注入前用 python `re.findall(r'cie_p3_XXXX_q\d+"', data)` 确认未录入；绝不用 `grep '"id": "cie_p3..._q'`（老题紧凑格式 `{"id":"..."}` 无空格会漏判）。已存在则跳过。
- 题干逐字复刻英文原版；截图只转 LaTeX 不入库；figure 只存真图，写全路径 `data/images/xxx.png`。
- 小分 `\hfill (N)`（JS `\\hfill`），正文同段落、绝不包进 `$...$`/`$$...$$`；禁 `\tag{N}`。
- 来源：Edexcel `年_月_卷号[_题号]`；CIE `YY_SERIES_VARIANT`（MJ/FM/ON，变体31/32/33）。month 用全称 FM=`Feb/March`、MJ=`May/June`、ON=`Oct/Nov`（label 含 "2024 Oct/Nov · Paper 31 Q1"）。
- 小问序号 `(a)(b)` 纯文本，绝不加粗 `**(a)**`。
- **换行只靠真实换行**：Excel 内用 Alt+Enter；严禁字面 `\newline`/`\n\n`（录入时删掉）。
- 必填：id/board/subject/chapter[]/source/stem/figure/difficulty(1–5)/solution/createdAt/examRef(.label)；注入另带 `topics:[]`。
- 章节权威清单：FP1 8章/FP2 8章/CIE P3 11章(含 Differentiation)/CIE S1 5章(Representation of data/Permutations & combinations/Probability/Discrete random variables/The normal distribution)，data.js `CHAPTER_PRESETS`。
- 模板：CIE P3 9 列；CIE S1 多图 11 列(配图/配图2/配图3)。注入脚本 `.workbuddy/inject_s1.py` 自动解析 xlsx cellImage → figure 数组，默认 APPLY=False 先 DRY_RUN。
- **Differentiation 归类**：隐/参数方程求导、求驻点极值单标签 `["Differentiation"]`；先极值再面积/体积双标签 `["Differentiation","Integration"]`；迭代定位驻点双标签 `["Differentiation","Numerical solution of equations"]`。微分方程→`Differential equations`、|z|极值→`Complex numbers`。

## 解析 / MathJax
- solution 内嵌 `![alt](src)`；网页上传转 data URI(≤1000px/JPEG q0.85)。mdToHtml 支持 GFM 表格。
- MathJax CHTML 模式(`tex-chtml-full.js`,scale 0.95)；CSS 调细字重 `font-weight:300`。

## 修改前备份 & 注入铁律
- 改 data.js/app.js 前 `python .workbuddy/tools/backup.py backup <file>`。
- **注入绝不截断 Store**：插到 `const SEED_QUESTIONS = [` 之后第一个 `];` 之前（`txt.index("];", txt.index(...))`），保留 `];` 及之后 Store IIFE 全部。绝不用 `rfind("];")`。
- 注入后校验：`node --check assets/js/data.js` + `grep -c "const Store = (function" assets/js/data.js` 须为 **1** + 题数核对。
- 稀疏数组空洞：录入后检测空洞 + 连调两次 Store.all() + vm 桩跑 init。

## 存储层（IndexedDB）
- 库 `mathbank`：`questions`(用户覆盖)、`deleted`(删除标记)，按 id keyPath。合并=O(1) 返回；无 IDB 降级 localStorage。
- 列表虚拟滚动(±6缓冲)+MathJax增量+分页(每页10)。
- 浏览器数据在 IndexedDB：仅刷新可能不生效（旧IDB覆盖优先）→ 最稳用网页「导入 JSON」或清站点 IndexedDB。

## 上线倾向（搁置）
- 纯静态+本地 IndexedDB，无后端。候选：腾讯云 Lighthouse(~¥60/年)/CloudBase(免后端)/Supabase(免费但海外慢)；排除标准 CVM ¥65/月。server/ 脚手架(Express+db.js)待补 auth。

## 资料库（真题卷/官方MS）
- 入口顶栏「📚 资料库」→ #libraryOverlay；PDF 弹窗 #pdfOverlay(iframe)。
- 来源①文件夹 `assets/papers/{board}/{subject}/{year}/{season}/{qp|ms}/*.pdf`：server `GET /api/papers` 实时扫描(**需 `node server/server.js`**)，否则读 `assets/papers/manifest.json` 兜底(增删PDF后跑 `node tools/scan_papers.js` 刷新)。来源②网页上传→独立 IndexedDB `mathbank_library`。
- 结构：board=CIE/Edexcel；CIE subject=9709/9231；Edexcel subject=单元代码。season：CIE `Feb-Mar/May-Jun/Oct-Nov`，Edexcel `Jan/Jun/Oct`。qp=原卷、ms=官方MS。
- 改 index.html/app.js/style.css 后同步 `public/`；PDF 不入库(git仅跟踪 manifest.json+README)，换机需重放。

## 本地服务器运维
- 资料库文件夹扫描必须运行 `node server/server.js`（端口 8787，双击「启动服务器.bat」）；file:// 双击因 CORS 取不到数据。
- server.js MIME 表含 `.pdf:application/pdf`（否则浏览器变下载）；改后须重启 server。
