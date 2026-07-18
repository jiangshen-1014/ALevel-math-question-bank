# 题库软件项目长期约定（Edexcel/CIE 数学）

## 录入规范（铁律）
- ⚠️ **录入前必做存在性检查**：新卷注入前先确认库中是否已录入该卷，用 python 稳健正则 `re.findall(r'cie_p3_XXXX_q\d+"', data)`（或 `(?:id|"id")\s*:\s*"cie_p3_XXXX_q`）。**绝不**只用 `grep '"id": "cie_p3_..._q'`（带空格展开格式）判定——老会话录入的题为紧凑格式 `{"id":"cie_p3_...",...}`（无空格），grep 会漏判为"未录入"，导致重复注入。若已存在则跳过，不重复录。（2026-07-18 曾因此误注入 22MJ31，靠"注入后重复 id 检测"当场发现并 restore 回滚，无损。）
- 题干截图只转 LaTeX 不入库；`figure` 只存真正配图，写全路径 `data/images/xxx.png`（app.js 渲染不拼前缀）。
- 题干逐字复刻英文原版，不增删改写；stem 只含原题+数学，不混中文解说。解析 solution 可中英结合。
- 小分用 `\hfill (N)`（JS 双反斜杠 `\\hfill`），必须在题干正文、紧跟文本同段落，**绝不**包进 `$...$`/`$$...$$`；禁止 `\tag{N}`。
- 来源格式：Edexcel 新 `年_月_卷号[_题号]`；CIE `YY_SERIES_VARIANT`（MJ/FM/ON，变体31/32/33）。
- **来源月份全称**：examRef.month 用全称 — FM=`"Feb/March"`，MJ=`"May/June"`，ON=`"Oct/Nov"`（label 同理含 "2024 Oct/Nov · Paper 31 Q1" 格式）。⚠️ 历史记忆曾误记成 "Oct/Nav"，以库内已录入数据（`24ON31` 等用 `"Oct/Nov"`）为准。
- **小问序号不加粗**：`(a)``(b)` 等纯文本，**绝不**用 `**(a)**`。
- **换行符（2026-07-17 修正）**：题干换行**只靠真实换行**——Excel 单元格内用 **Alt+Enter** 输入真实换行符；json.dumps 写出为 JS 源码里的 `\n`，浏览器加载时解析为真实换行，`mdToHtml` 按「行内 `\n`→`<br>`、连续 `\n{2,}`→分段 `<p>`」渲染。**严禁**在 Excel 里写字面转义 `\newline` 或 `\n\n` 当换行——录入时必须把这些**字面文本删除**（不转真实换行）。即：真实换行保留，字面 `\newline`/`\n\n` 删除。
- 每题必填：id / board / subject / chapter[] / source / stem / figure / difficulty(1–5) / solution / createdAt / examRef（含 `.label` 的对象）。注入时另带 `topics: []`（与库内 25 系列题一致；老 23/24 系列题无此字段，JS 容忍）。
- **批量录入 Excel 模板列结构（CIE P3 新模板）**：表头 9 列 = `考试局/科目 / 来源 / 题干 / 配图 / 章节 / 考点 / 难度 / 分值 / 解析`。说明：①「考试局/科目」仅首行填（如 `CIE/P3`），其余行沿用；②「配图」列填 `DISPIMG("ID_...")` 才提取嵌入图（存 `data/images/{来源}.png`），若填纯数字占位（如 `4/5/6`）且无嵌入图则 `figure` 留空；③「章节/考点/难度/分值/解析」可空——**空则推断**：章节按题干内容+`Differentiation` 规则判定，难度给合理 1–5 值，`marks` 从题干 `\hfill(N)` 求和，solution 留空。注入脚本应「优先读列、空则回退推断」（参考 `.workbuddy/inject_22on33.py`）。
- ⚠️ 稀疏数组空洞白屏：录入后必须显式 `for` 检测空洞 + 连调两次 Store.all() + vm 桩跑 init。
- 章节权威清单（FP1 8章 / FP2 8章 / **CIE P3 11章**，含 `Differentiation`）在 data.js `CHAPTER_PRESETS`，录入严格对应。
- ✅ **CIE P3 `Differentiation` 章已加入（2026-07-17）**：隐函数求导、参数方程求导、求 maximum/minimum（含驻点）的题目**都归属 `Differentiation`**。归类细则：① 纯微分法（隐函数/参数方程/令 dy/dx=0 解极值）单标签 `["Differentiation"]`；② 先求极值再求面积/体积的多问大题双标签 `["Differentiation","Integration"]`；③ 用迭代/数值法定位驻点的题双标签 `["Differentiation","Numerical solution of equations"]`（保留数值法身份）。微分方程求解仍归 `"Differential equations"`、复平面 |z| 极值仍归 `"Complex numbers"`、求给定梯度后积分的题（如 `25MJ35_q7`）仍归 `"Integration"`。

## 解析配图 / 数学字体
- solution 内嵌 `![alt](src)`；网页上传转 data URI（缩≤1000px / JPEG q0.85）；种子图写全路径。三处解析均走 `mdToHtml`。
- MathJax 已切 SVG 模式：`.MathJax_SVG text{font-family:"Segoe UI";font-weight:400!important}` 全量覆盖为系统正文字体。

## 修改前备份（铁律）
- 改 data.js/app.js 前必跑 `python .workbuddy/tools/backup.py backup <file>`（存 `.workbuddy/backups/`，保留 30 版；restore 自动再备份）。
- ⚠️ **注入绝不可截断 Store**：`data.js` 末尾在 `SEED_QUESTIONS` 的 `];` **之后**还有完整的 `Store` IIFE（`const Store = (function(){...})();`，含 `parseExamRef`/`_MONTHS`/`_normMonth`/init/all/upsert/remove/replaceAll）。录入注入必须用**行式插入到 `];` 之前、保留 `];` 及之后全部内容**的方式；**绝不可**整体重写或截断 `];` 之后，否则白屏。
- 注入后**强制校验**：`node --check assets/js/data.js` 通过 + `grep -c "const Store = (function" assets/js/data.js` 须为 1 + `grep -o '"id":"' assets/js/data.js | wc -l`（或 python 解析 SEED_QUESTIONS）确认题数。
- 若已截断 Store 的**恢复流程**：从注入前备份用 Python 提取 `];` 之后全部行（Store 段落）追加到当前文件（先确认当前末尾确为 `];`），再 `node --check`。

## 存储层与规模化（2026-07-15）
- ⚠️ 数据丢失根因：用户网页编辑发生在 `_edited` 保护加入**前** → 本地题无标记；抬高种子 createdAt 后刷新，`Store.all()` 把未保护本地题整条覆盖为种子版（种子 139 题全有解析，故丢失的是用户**改写版**而非空白）。补救：未刷新标签页立即点「导出 JSON」是唯一找回途径。
- ✅ **P0 已实施**：存储层迁移 **IndexedDB**（库 `mathbank`，对象库 `questions` 存用户覆盖记录、`deleted` 存删除标记，均按 id keyPath）。合并 = 种子被覆盖按 id 覆盖 + 排除已删 id；内存 `_cache` 仅 `init()` 构建一次，`Store.all()` 此后 O(1) 返回；保存退化为一次异步 `put`（非阻塞）。首次运行自动迁移 localStorage 中 `_edited`/非种子记录（等同种子不固化，便于种子修复自动生效）。无 IDB 时降级回 localStorage 旧逻辑。
- 验证：假 IndexedDB 自测（迁移/覆盖胜出/删除/新增/按 id 持久化）全 PASS；`node --check` data.js/app.js 通过；改动前已用 backup.py 备份。
- ✅ **P1 已实施（2026-07-15）**：列表虚拟滚动（仅渲染可视区 ±6 缓冲卡片，DOM 节点从全量 N 降到 ~40）+ MathJax 增量排版（仅新卡 stem，解析展开时再排）+ 保存单题精准更新（`vlUpdateItem`：仅当该卡可见且仍在筛选内才替换其 DOM，否则才整页重建）；解析展开/收起触发重测高度并滚动锚定防跳屏；含「VL 未初始化全量渲染」兜底。验证：node 语法校验通过 + 纯逻辑（二分查找/偏移累加）单测全 PASS + DOM 桩集成测试（139 题仅挂 10 卡，WINDOWING_OK）。关键改动：`assets/js/app.js` 新增 `VL` 虚拟列表模块 + `vlInit/vlBuild/vlRender/vlUpdateItem` 等；`typeset` 支持回调；`toggleBasket`/`saveEdit` 改为精准更新；`assets/css/style.css` 加 `#qList{position:relative}`。
- ✅ **列表分页（2026-07-16）**：在 P1 虚拟滚动之上加显式分页（每页 10 题）。`renderList` 先全量过滤再 `slice` 当前页喂 `vlBuild`；`renderPager`+`pageNumbers`（>10 页带省略号）渲染页码/上下页/信息；搜索/筛选/侧边栏切换复位 `state.page=1`；`index.html` 在 `.list-wrap` 外加 `#pager` 固定底栏，`style.css` 加 `.pager` 样式。验证：DOM 桩测试 第1页挂10卡、点页码2切第2页 → PAGINATION_OK。
- 🔁 **「以导出文件为准覆盖」恢复流程（2026-07-15 实战）**：用户提供旧标签页导出的 JSON（135 题，含被恢复自定义解析）。做法 = 合并写回 `SEED_QUESTIONS`：重叠题以文件为准、种子独有真实题保留（示例题样题缺 `examRef` 时自动补 `examRef.label`）。并导出合并集 JSON（如 `mathbank_recovered_YYYY-MM-DD.json`，139 题）供网页「导入 JSON」一键生效。⚠️ 浏览器生效注意：P0 后数据在 IndexedDB，**仅刷新可能不生效**（旧 IDB 覆盖优先）；最稳是网页内「导入 JSON」选合并集文件，或清掉站点 IndexedDB 后刷新（新种子即合并集）。

## 上线/部署倾向（2026-07-17，当前搁置）
- **现状**：纯静态前端 + 浏览器本地 IndexedDB，无后端/登录/共享写入。多人共享录入**必须**加后端+共享库+登录。
- **用户决策**：暂时搁置上线，优先完善本地数据。未来上线时再议。
- **成本敏感**：介意标准 CVM ¥65/月；倾向免费/极便宜方案。国内访问速度重要（使用者均在国内）。
- **候选方案**（上线时据预算/实名意愿选）：
  1. 腾讯云轻量服务器 Lighthouse 特价（~¥60/年，国内快，需实名，复用 Node 服务+一键脚本）。
  2. 腾讯云 CloudBase 云开发（国内快，免后端代码、前端直连平台库+登录，有免费/极低额度，需实名）。
  3. Supabase（海外，完全免费、免实名免备案，前端直连 API，但国内偏慢）。
  4. *排除*：纯静态托管（CloudStudio 部署）跑不了后端；标准 CVM ¥65/月偏贵。
- **已搭未完成的 `server/` 脚手架**（Express + `db.js` JSON 文件库 + 待补 `auth.js`）：上线时复用，本地应用不加载它、不影响当前使用。
