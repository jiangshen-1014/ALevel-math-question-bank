/* =====================================================================
 * app.js —— 界面逻辑
 * ===================================================================== */
(function () {
  "use strict";

  /* ---------- 状态 ---------- */
  const state = {
    board: "",      // "" | CIE | Edexcel
    subject: "",    // 科目 code
    chapter: "",
    diff: "",
    year: "",       // 真题年份筛选（如 2026）
    month: "",      // 真题月份筛选（如 Jan）
    paper: "",      // 真题卷号筛选（如 01A）
    search: "",
    page: 1,         // 当前页码（分页，每页 PAGE_SIZE 题）
    basket: loadBasket(),
    selected: []   // 组卷多选：当前勾选的题 id（与组卷篮相互独立）
  };

  /* ---------- 工具 ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  function loadBasket() {
    try { return JSON.parse(localStorage.getItem("mathbank_basket") || "[]"); }
    catch (e) { return []; }
  }
  function saveBasket() { localStorage.setItem("mathbank_basket", JSON.stringify(state.basket)); }

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 2000);
  }

  /* 自定义确认弹窗（替代被 webview 禁用的 window.confirm，返回 Promise<boolean>） */
  function confirmDialog(message) {
    return new Promise(resolve => {
      $("#confirmMsg").textContent = message;
      const ov = $("#confirmOverlay");
      const ok = $("#confirmOk"), cancel = $("#confirmCancel");
      function cleanup(result) {
        ov.classList.remove("open");
        ok.onclick = cancel.onclick = null;
        resolve(result);
      }
      ok.onclick = () => cleanup(true);
      cancel.onclick = () => cleanup(false);
      ov.classList.add("open");
    });
  }

  function escapeHtml(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* 正则特殊字符转义（防止关键词里的 . * ( ) 等破坏 RegExp） */
  function escapeRegExp(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /* 在「已 HTML 转义」的字符串中高亮关键词。
     用 <tag> | 文本 的分割，只高亮标签之间的纯文本，绝不破坏标签结构。 */
  function highlightHtml(escapedHtml, kw) {
    if (!kw) return escapedHtml;
    const re = new RegExp("(" + escapeRegExp(kw) + ")", "gi");
    return escapedHtml.replace(/(<[^>]+>)|([^<]+)/g, (m, tag, text) => {
      if (tag) return tag;                                   // 标签原样保留
      return text.replace(re, "<mark>$1</mark>");            // 纯文本段高亮
    });
  }

  /* TikZ 代码 → <script type="text/tikz">（原样，不转义；由 TikZJax 编译成 SVG） */
  function tikzScriptHtml(code) {
    // script 原始文本仅在遇到 </script> 时结束，反斜杠/花括号无需转义
    return '<div class="tikz-block"><script type="text/tikz">\n' + code.trim() + '\n<\/script></div>';
  }

  /* 轻量 markdown（保留 LaTeX 交给 MathJax；提取 TikZ 交给 TikZJax；
     文本模式 LaTeX 排版指令 \hfill \\ \quad 等转为 HTML，使其脱离 $...$ 也能生效） */
  function mdToHtml(src, kw) {
    if (!src) return "";
    // 1) 先抽取 TikZ 代码块，占位，避免被转义/markdown 破坏
    const tikz = [];
    const TOK = i => "\u0000TIKZ" + i + "\u0000";
    let s = String(src);
    //   a) ```tikz ... ``` 围栏写法
    s = s.replace(/```tikz\s*([\s\S]*?)```/g, (m, code) => { tikz.push(code); return TOK(tikz.length - 1); });
    //   b) 裸 tikzpicture（可带前置 \usetikzlibrary / \tikzset 行）
    s = s.replace(/(?:\\usetikzlibrary\s*\{[^}]*\}\s*|\\tikzset\s*\{[\s\S]*?\}\s*)*\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g,
      (m) => { tikz.push(m); return TOK(tikz.length - 1); });
    // 2) 保护 $...$ / $$...$$ 数学区，避免其中的反斜杠命令被当成文本排版指令处理
    const math = [];
    const MT = i => "\u0001MATH" + i + "\u0001";
    s = s.replace(/\$\$([\s\S]+?)\$\$/g, (m) => { math.push(m); return MT(math.length - 1); });
    s = s.replace(/\$(?!\s)([^$\n]+?)\$/g, (m) => { math.push(m); return MT(math.length - 1); });
    // 2.5) 抽取图片 markdown ![alt](src)，避免被转义 / 关键词高亮 / 数学逻辑破坏
    //      src 可为 data: 数据 URI（网页上传的配图）或 data/images/xxx.png 路径（种子入库图）
    const imgs = [];
    const IMG = i => "\u0003IMG" + i + "\u0003";
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, alt, src) => { imgs.push({ alt, src }); return IMG(imgs.length - 1); });
    // 3) 转义 HTML
    s = escapeHtml(s);
    // 4) 文本模式 LaTeX 排版指令（数学区已保护，这里只处理正文文本）
    //    \hfill  → 一行内左右推开的弹性间隔（flex space-between）
    //    \\      → 换行（排除 \[ \] \( \) 这些数学定界符）
    //    \newline → 换行；\noindent → 忽略；\quad/\qquad → 空格
    const lines = s.split("\n").map(line => {
      let l = line.replace(/\\\\(?![\[\]()])/g, "<br>");
      if (l.indexOf("\\hfill") !== -1) {
        const parts = l.split("\\hfill").map(p => `<span>${p}</span>`);
        return `<span class="hfill-line">${parts.join("")}</span>`;
      }
      return l;
    });
    s = lines.join("\n");
    s = s.replace(/\\newline/g, "<br>");
    s = s.replace(/\\noindent/g, "");
    s = s.replace(/\\qquad/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    s = s.replace(/\\quad/g, "&nbsp;&nbsp;");
    // 5) 轻量 markdown
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    // 5.5) markdown 表格：识别含分隔行（|---|---|）的连续表格块
    s = mdTable(s);
    // 6) 分段（空行分隔）；表格块（以 <table 开头）不包 <p>
    const blocks = s.split(/\n{2,}/).map(b => {
      if (/^\s*<table[\s>]/.test(b)) return b;
      return `<p>${b.replace(/\n/g, "<br>")}</p>`;
    });
    s = blocks.join("");
    // 6.5) 关键词高亮：先把数学区/ TikZ 占位符临时换成不会被匹配的保护符，
    //      高亮结束再还原，避免关键词“MATH/TIKZ/数字”误伤占位符导致数学/配图无法还原。
    if (kw) {
      const saved = [];
      const protect = m => { saved.push(m); return "\u0002" + (saved.length - 1) + "\u0002"; };
      s = s.replace(/\u0001MATH(\d+)\u0001/g, protect);
      s = s.replace(/\u0000TIKZ(\d+)\u0000/g, protect);
      s = s.replace(/\u0003IMG(\d+)\u0003/g, protect);
      s = highlightHtml(s, kw);
      s = s.replace(/\u0002(\d+)\u0002/g, (m, i) => saved[+i]);
    }
    // 7) 还原数学区
    s = s.replace(/\u0001MATH(\d+)\u0001/g, (m, i) => math[+i] || "");
    // 8) 还原 TikZ：把占位符（含被 <p> 包裹的情况）替换为原始 script 块
    s = s.replace(/<p>\s*\u0000TIKZ(\d+)\u0000\s*<\/p>/g, (m, i) => tikzScriptHtml(tikz[+i]));
    s = s.replace(/\u0000TIKZ(\d+)\u0000/g, (m, i) => tikzScriptHtml(tikz[+i]));
    // 9) 还原图片：占位符 → <img>（解析配图）
    s = s.replace(/\u0003IMG(\d+)\u0003/g, (m, i) => {
      const im = imgs[+i];
      if (!im) return "";
      return `<img class="sol-img" src="${escapeAttr(im.src)}" alt="${escapeAttr(im.alt)}">`;
    });
    return s;
  }

  /* 章节 / 考点等短标签 → 渲染为可含行内公式（$...$）的安全内部 HTML。
     保留 $...$ 交给 MathJax，其余转义；关键词高亮时先保护数学占位符，
     避免把 $...$ 内部字符（如变量名）误当成关键词包裹，破坏公式。
     返回不含外层包裹的内部 HTML，调用方自行套 <span class="...">。 */
  function mathInner(str, kw) {
    if (!str) return "";
    const math = [];
    const MT = i => "\u0001MATH" + i + "\u0001";
    let s = String(str)
      .replace(/\$\$([\s\S]+?)\$\$/g, m => { math.push(m); return MT(math.length - 1); })
      .replace(/\$(?!\s)([^$\n]+?)\$/g, m => { math.push(m); return MT(math.length - 1); });
    s = escapeHtml(s);
    if (kw) {
      const saved = [];
      const protect = m => { saved.push(m); return "\u0002" + (saved.length - 1) + "\u0002"; };
      s = s.replace(/\u0001MATH(\d+)\u0001/g, protect);
      s = highlightHtml(s, kw);
      s = s.replace(/\u0002(\d+)\u0002/g, (m, i) => saved[+i]);
    }
    s = s.replace(/\u0001MATH(\d+)\u0001/g, (m, i) => math[+i] || "");
    return s;
  }

  /* markdown 表格解析（GFM 风格：表头行 + 分隔行 + 数据行；支持省略首尾 | 与列对齐 :-- / :--: / --:）
     单元格内文本已是转义后的 HTML，含数学占位符 \u0001MATHx\u0001（后续步骤会还原），$...$ 在表格里同样可用。 */
  function mdTable(src) {
    const lines = src.split("\n");
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const t = collectTable(lines, i);
      if (t) { out.push(t.html); i = t.end; continue; }
      out.push(lines[i]); i++;
    }
    return out.join("\n");
  }
  function collectTable(lines, start) {
    if (start + 1 >= lines.length) return null;
    const header = lines[start], sep = lines[start + 1];
    if (!header.includes("|") || !isSepRow(sep)) return null;
    const rows = [header, sep];
    let j = start + 2;
    while (j < lines.length && lines[j].includes("|") && lines[j].trim() !== "") { rows.push(lines[j]); j++; }
    return { html: buildTable(rows), end: j };
  }
  function isSepRow(line) {
    let t = line.trim();
    if (t.includes("|")) { if (t.startsWith("|")) t = t.slice(1); if (t.endsWith("|")) t = t.slice(0, -1); }
    const cells = t.split("|").map(c => c.trim());
    return cells.length > 0 && cells.every(c => /^:?-+:?$/.test(c));
  }
  function splitCells(line) {
    let t = line.trim();
    if (t.startsWith("|")) t = t.slice(1);
    if (t.endsWith("|")) t = t.slice(0, -1);
    return t.split("|").map(c => c.trim());
  }
  function buildTable(rows) {
    const header = splitCells(rows[0]);
    const aligns = splitCells(rows[1]).map(c => {
      const l = c.startsWith(":"), r = c.endsWith(":");
      return l && r ? "center" : r ? "right" : l ? "left" : "";
    });
    let h = '<table class="md-table"><thead><tr>';
    header.forEach((c, k) => { h += `<th${aligns[k] ? ` style="text-align:${aligns[k]}"` : ""}>${c}</th>`; });
    h += "</tr></thead><tbody>";
    for (let r = 2; r < rows.length; r++) {
      const cells = splitCells(rows[r]);
      h += "<tr>";
      header.forEach((_, k) => { h += `<td${aligns[k] ? ` style="text-align:${aligns[k]}"` : ""}>${cells[k] !== undefined ? cells[k] : ""}</td>`; });
      h += "</tr>";
    }
    return h + "</tbody></table>";
  }

  /* 属性值转义（用于 <img src alt> 等，防止 " 破坏属性或注入） */
  function escapeAttr(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  let _typesetQueue = Promise.resolve();
  function typeset(els, cb) {
    if (!window.MathJax || !window.MathJax.typesetPromise) {
      setTimeout(() => typeset(els, cb), 300); return;
    }
    const list = Array.isArray(els) ? els.filter(Boolean) : (els ? [els] : undefined);
    _typesetQueue = _typesetQueue.then(() =>
      window.MathJax.typesetPromise(list)
        .then(() => { if (cb) cb(); })
        .catch(e => { console.warn(e); if (cb) cb(); })
    );
  }

  /* 触发 TikZJax 处理动态插入的 tikz 脚本。
     tikzjax.com/v1 把处理器挂在 window.onload 上、只在页面 load 时扫描一次，
     无 DOM 监听；SPA 动态渲染后需手动再调用一次。已渲染的脚本会被替换为 SVG，重复调用无副作用。 */
  let _tikzTries = 0;
  function renderTikz(root) {
    const scope = root || document;
    if (!scope.querySelector || !scope.querySelector('script[type="text/tikz"]')) return;
    if (typeof window.onload === "function") {
      _tikzTries = 0;
      try { window.onload(); } catch (e) { console.warn("TikZ 渲染失败", e); }
    } else if (_tikzTries < 25) {
      // TikZJax 尚未加载完成，稍后重试
      _tikzTries++;
      setTimeout(() => renderTikz(root), 400);
    }
  }

  function diffDots(n) {
    let h = '<span class="diff">';
    for (let i = 1; i <= 5; i++) h += `<i class="${i <= n ? "on" : ""}"></i>`;
    return h + "</span>";
  }

  function subjectName(board, code) {
    const b = TAXONOMY[board];
    if (!b) return code;
    const s = b.subjects.find(x => x.code === code);
    return s ? s.name : code;
  }

  /* ---------- 侧边栏 ---------- */
  function renderSidebar() {
    const data = Store.all();
    const el = $("#sidebar");
    let html = "";
    // 全部
    html += `<div class="side-all ${!state.board ? "active" : ""}" data-all="1">
        <span>📚 全部题目</span><span class="cnt">${data.length}</span></div>`;

    Object.keys(TAXONOMY).forEach(board => {
      const b = TAXONOMY[board];
      const boardCount = data.filter(q => q.board === board).length;
      const dotColor = board === "CIE" ? "var(--cie)" : "var(--edx)";
      const collapsed = state.board && state.board !== board ? "collapsed" : "";
      html += `<div class="board-block ${collapsed}" data-board="${board}">
        <div class="board-head" data-toggle="${board}">
          <span class="dot" style="background:${dotColor}"></span>
          <span>${board}</span>
          <span class="chev">▾</span>
          <span class="cnt">${boardCount}</span>
        </div>
        <div class="subject-list">`;

      // 按 group 分组
      const groups = {};
      b.subjects.forEach(s => { (groups[s.group] = groups[s.group] || []).push(s); });
      Object.keys(groups).forEach(g => {
        html += `<div class="subj-group">${g}</div>`;
        groups[g].forEach(s => {
          const c = data.filter(q => q.board === board && q.subject === s.code).length;
          const active = state.board === board && state.subject === s.code ? "active" : "";
          html += `<div class="subject-item ${active}" data-board="${board}" data-subject="${s.code}" title="${s.name}">
            <span class="code">${s.code}</span>
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${s.name.replace(/（.*）/, "")}</span>
            <span class="cnt">${c}</span>
          </div>`;
        });
      });
      html += `</div></div>`;
    });
    el.innerHTML = html;

    $(".side-all", el).onclick = () => { state.board = ""; state.subject = ""; state.chapter = ""; state.page = 1; refresh(); };
    $$(".board-head", el).forEach(h => {
      h.onclick = () => { h.parentElement.classList.toggle("collapsed"); };
    });
    $$(".subject-item", el).forEach(it => {
      it.onclick = () => {
        state.board = it.dataset.board; state.subject = it.dataset.subject;
        state.chapter = ""; state.page = 1; refresh();
      };
    });
  }

  /* ---------- 章节筛选下拉 ---------- */
  function renderChapterFilter() {
    const sel = $("#filterChapter");
    const data = filteredBase();
    const chapters = [...new Set(data.flatMap(q => Array.isArray(q.chapter) ? q.chapter : [q.chapter]).filter(Boolean))].sort();
    sel.innerHTML = `<option value="">全部章节</option>` +
      chapters.map(c => `<option value="${escapeHtml(c)}" ${state.chapter === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("");
    $("#filterChapter").value = state.chapter;
  }

  /* ---------- 真题年份 / 月份 / 卷号筛选下拉 ---------- */
  const _MONTH_ORDER = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  function renderExamFilters() {
    const data = filteredBase();
    const refs = data.map(q => q.examRef).filter(Boolean);
    const years = [...new Set(refs.map(r => r.year))].sort((a, b) => a - b);
    const months = [...new Set(refs.map(r => r.month).filter(Boolean))]
      .sort((a, b) => _MONTH_ORDER.indexOf(a) - _MONTH_ORDER.indexOf(b));
    const papers = [...new Set(refs.map(r => r.paper).filter(Boolean))].sort();
    $("#filterYear").innerHTML = `<option value="">全部年份</option>` +
      years.map(y => `<option value="${y}" ${state.year == y ? "selected" : ""}>${y}</option>`).join("");
    $("#filterMonth").innerHTML = `<option value="">全部月份</option>` +
      months.map(mo => `<option value="${escapeHtml(mo)}" ${state.month === mo ? "selected" : ""}>${escapeHtml(mo)}</option>`).join("");
    $("#filterPaper").innerHTML = `<option value="">全部卷号</option>` +
      papers.map(p => `<option value="${escapeHtml(p)}" ${state.paper === p ? "selected" : ""}>${escapeHtml(p)}</option>`).join("");
  }

  /* 仅按 board/subject 过滤（用于章节下拉的候选） */
  function filteredBase() {
    let data = Store.all();
    if (state.board) data = data.filter(q => q.board === state.board);
    if (state.subject) data = data.filter(q => q.subject === state.subject);
    return data;
  }

  function filteredQuestions() {
    let data = filteredBase();
    if (state.chapter) data = data.filter(q => (Array.isArray(q.chapter) ? q.chapter : [q.chapter]).includes(state.chapter));
    if (state.diff) data = data.filter(q => String(q.difficulty) === state.diff);
    if (state.year) data = data.filter(q => q.examRef && q.examRef.year == state.year);
    if (state.month) data = data.filter(q => q.examRef && q.examRef.month === state.month);
    if (state.paper) data = data.filter(q => q.examRef && q.examRef.paper === state.paper);
    if (state.search) {
      const kw = state.search.toLowerCase();
      data = data.filter(q =>
        (q.stem || "").toLowerCase().includes(kw) ||
        ((Array.isArray(q.chapter) ? q.chapter.join(" ") : (q.chapter || "")).toLowerCase().includes(kw)) ||
        (q.source || "").toLowerCase().includes(kw) ||
        (q.topics || []).join(" ").toLowerCase().includes(kw) ||
        (q.solution || "").toLowerCase().includes(kw));
    }
    return data;
  }

  /* ---------- 头部标题 ---------- */
  function renderHead() {
    const crumb = $("#crumb"), title = $("#viewTitle"), sub = $("#viewSub");
    if (!state.board) {
      crumb.innerHTML = "全部题目";
      title.textContent = "全部题目";
      sub.textContent = "选择左侧大类与科目进行筛选，或直接搜索";
    } else if (!state.subject) {
      crumb.innerHTML = `<b>${state.board}</b>`;
      title.textContent = TAXONOMY[state.board].label;
      sub.textContent = TAXONOMY[state.board].note;
    } else {
      crumb.innerHTML = `<b>${state.board}</b> / ${state.subject}`;
      title.textContent = `${state.subject} · ${subjectName(state.board, state.subject).replace(/（.*）/, "")}`;
      sub.textContent = subjectName(state.board, state.subject);
    }
  }

  /* ---------- 题目列表（虚拟滚动 / 窗口化渲染）----------
   * 仅渲染可视区域附近的卡片（一屏约 40 张 + 上下缓冲），其余用累加高度撑出滚动条；
   * MathJax 仅对新渲染卡片做增量排版（且只排可见的 stem，解析展开时再排）；
   * 保存单题只精准更新该卡片 DOM，不整页 refresh。 */
  const GAP = 12;            // 卡片间垂直间距（与 .q-card margin-bottom 一致）
  const PAGE_SIZE = 10;      // 每页题目数（分页）
  const VL = {
    items: [],               // 当前筛选后的题对象数组
    heights: [],             // 每项实测/估算高度
    offsets: [],             // 每项顶部偏移（累加）
    total: 0,
    rendered: new Map(),     // idx -> 当前在 DOM 中的卡片节点
    scrollEl: null,          // 滚动容器（.list-wrap）
    viewportEl: null,        // #qList
    est: 200,                // 估算高度（未测量前的占位）
    buffer: 6,               // 可视区上下各多渲染的缓冲张数
    active: false
  };

  function vlInit() {
    VL.scrollEl = document.querySelector(".list-wrap");
    VL.viewportEl = $("#qList");
    VL.active = true;
    let scheduled = false;
    VL.scrollEl.addEventListener("scroll", () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; vlRender(); });
    });
    window.addEventListener("resize", () => { if (VL.active) vlRender(); });
  }

  function vlRecompute(from) {
    if (from <= 0) {
      VL.offsets = new Array(VL.items.length);
      VL.offsets[0] = 0;
      from = 1;
    }
    for (let i = from; i < VL.items.length; i++) {
      VL.offsets[i] = VL.offsets[i - 1] + VL.heights[i - 1] + GAP;
    }
    VL.total = VL.items.length
      ? VL.offsets[VL.items.length - 1] + VL.heights[VL.items.length - 1]
      : 0;
  }

  function vlFindFirst(top) {
    let lo = 0, hi = VL.items.length - 1, ans = 0;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      const bottom = VL.offsets[mid] + VL.heights[mid] + GAP;
      if (bottom > top) { ans = mid; hi = mid - 1; } else lo = mid + 1;
    }
    return ans;
  }
  function vlFindLast(bottom) {
    let lo = 0, hi = VL.items.length - 1, ans = VL.items.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (VL.offsets[mid] <= bottom) { ans = mid; lo = mid + 1; } else hi = mid - 1;
    }
    return ans;
  }

  function vlMakeCard(q, i) {
    const tmp = document.createElement("div");
    tmp.innerHTML = cardHtml(q);
    const node = tmp.firstElementChild;
    node.style.position = "absolute";
    node.style.left = "0";
    node.style.right = "0";
    node.dataset.vidx = i;
    // 内容/公式/图片高度变化（解析展开、MathJax 排版、配图加载）自动重测并重排下方卡片
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => vlMeasure(node, i));
      ro.observe(node);
      node._ro = ro;
    }
    return node;
  }
  function vlPosition(node, i) { node.style.top = VL.offsets[i] + "px"; }

  // 排版完成后测量真实高度；若与估算不同则更新并平移下方卡片（含滚动锚定防跳屏）
  function vlMeasure(node, i) {
    if (VL.rendered.get(i) !== node) return;          // 卡片已被回收/替换，忽略过期测量
    const h = node.offsetHeight;
    if (!h || Math.abs(h - VL.heights[i]) <= 0.5) return;
    const aboveTop = VL.offsets[i] < VL.scrollEl.scrollTop;
    const delta = h - VL.heights[i];
    VL.heights[i] = h;
    vlRecompute(i + 1);
    if (aboveTop) VL.scrollEl.scrollTop += delta;     // 上方卡片高度变化 → 锚定滚动位置避免跳屏
    VL.viewportEl.style.height = VL.total + "px";
    for (const [idx, n] of VL.rendered) if (idx >= i) n.style.top = VL.offsets[idx] + "px";
  }

  function vlTypeset(node, i) {
    // .q-tags 已在 .q-stem 内部，单独传入会导致 MathJax 对标签里的公式重复排版
    const parts = [node.querySelector(".q-top"), node.querySelector(".q-stem")].filter(Boolean);
    typeset(parts, () => { renderTikz(node); vlMeasure(node, i); });
  }

  function vlRender() {
    if (!VL.items.length) return;
    const vh = VL.scrollEl.clientHeight || 800;
    const top = VL.scrollEl.scrollTop;
    let first = vlFindFirst(top);
    let last = vlFindLast(top + vh);
    first = Math.max(0, first - VL.buffer);
    last = Math.min(VL.items.length - 1, last + VL.buffer);
    // 回收可视区外的卡片
    for (const [idx, node] of VL.rendered) {
      if (idx < first || idx > last) { if (node._ro) node._ro.disconnect(); node.remove(); VL.rendered.delete(idx); }
    }
    // 渲染可视区内的卡片
    for (let i = first; i <= last; i++) {
      if (VL.rendered.has(i)) continue;
      const node = vlMakeCard(VL.items[i], i);
      vlPosition(node, i);
      VL.viewportEl.appendChild(node);
      VL.rendered.set(i, node);
      vlTypeset(node, i);
    }
  }

  function vlReset() { for (const n of VL.rendered.values()) if (n._ro) n._ro.disconnect(); VL.viewportEl.innerHTML = ""; VL.rendered.clear(); }

  function vlBuild(items) {
    VL.items = items;
    VL.heights = items.map(() => VL.est);
    vlRecompute(0);
    vlReset();
    VL.viewportEl.style.height = VL.total + "px";
    VL.scrollEl.scrollTop = 0;
    vlRender();
  }

  function vlNodeById(id) {
    for (const n of VL.rendered.values()) if (n.dataset.id === id) return n;
    return null;
  }

  /* 保存/编辑后：仅精准更新该卡片（若当前可见且仍在筛选内），不整页刷新 */
  function vlUpdateItem(q) {
    const idx = VL.items.findIndex(x => x.id === q.id);
    if (idx < 0) return;                 // 不在当前筛选结果中，无需可见更新
    VL.items[idx] = q;
    const node = VL.rendered.get(idx);
    if (!node) return;                   // 不在当前可视窗口，滚动到时会按新数据渲染
    if (node._ro) node._ro.disconnect();
    const newNode = vlMakeCard(q, idx);
    vlPosition(newNode, idx);
    node.replaceWith(newNode);
    VL.rendered.set(idx, newNode);
    vlTypeset(newNode, idx);
  }

  function renderList() {
    const full = filteredQuestions();
    const total = full.length;
    const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (state.page > pages) state.page = pages;
    if (state.page < 1) state.page = 1;
    const start = (state.page - 1) * PAGE_SIZE;
    const pageItems = full.slice(start, start + PAGE_SIZE);
    $("#listCount").textContent = `共 ${total} 题`;
    const wrap = $("#qList");
    if (!total) {
      vlReset();
      VL.items = [];
      VL.viewportEl.style.height = "auto";
      wrap.innerHTML = `<div class="empty"><div class="big">📭</div>暂无题目<br>
        <span style="font-size:12px">点击右上角「＋ 新增题目」，或把题目截图发给我自动录入</span></div>`;
      renderSelBar();
      renderPager(0, 1);
      return;
    }
    if (!VL.active) {
      // 兜底：虚拟列表尚未初始化时退化为旧全量渲染（仍按当前页切片）
      wrap.innerHTML = pageItems.map(cardHtml).join("");
      typeset(wrap); renderTikz(wrap);
    } else {
      vlBuild(pageItems);
    }
    renderSelBar();
    renderPager(total, pages);
  }

  /* 分页器：页码按钮 + 上/下一页 + 信息；点击用事件委托（bindEvents 中绑定 #pager） */
  function pageNumbers(cur, pages) {
    if (pages <= 10) return Array.from({ length: pages }, (_, i) => i + 1);
    const set = new Set([1, pages, cur, cur - 1, cur + 1, cur - 2, cur + 2]);
    const arr = [...set].filter(n => n >= 1 && n <= pages).sort((a, b) => a - b);
    const out = [];
    let prev = 0;
    for (const n of arr) {
      if (n - prev > 1) out.push("...");
      out.push(n);
      prev = n;
    }
    return out;
  }
  function renderPager(total, pages) {
    const pager = $("#pager");
    if (!pager) return;
    if (total === 0) { pager.style.display = "none"; return; }
    pager.style.display = "";
    const cur = state.page;
    let html = `<button class="btn sm ghost pg-btn" data-pg="prev" ${cur <= 1 ? "disabled" : ""}>‹ 上一页</button>`;
    for (const n of pageNumbers(cur, pages)) {
      if (n === "...") html += `<span class="pg-ellipsis">…</span>`;
      else html += `<button class="btn sm pg-btn ${n === cur ? "active" : ""}" data-pg="${n}">${n}</button>`;
    }
    html += `<button class="btn sm ghost pg-btn" data-pg="next" ${cur >= pages ? "disabled" : ""}>下一页 ›</button>`;
    html += `<span class="pg-info">第 ${cur} / ${pages} 页 · 每页 ${PAGE_SIZE} 题 · 共 ${total} 题</span>`;
    pager.innerHTML = html;
  }

  // figure 兼容：单字符串 或 字符串数组（S1 一道题可挂多张配图）
  function figureHtml(fig, cls) {
    if (!fig) return "";
    const arr = Array.isArray(fig) ? fig.filter(Boolean) : [fig];
    if (!arr.length) return "";
    const imgs = arr.map(p => `<img src="${p}" alt="配图" class="zoom-img" />`).join("");
    return `<div class="${cls}">${imgs}</div>`;
  }

  function cardHtml(q) {
    const inBasket = state.basket.includes(q.id);
    const checked = state.selected.includes(q.id);
    const figHtml = figureHtml(q.figure, "q-fig");
    const kw = state.search;
    const tags = (q.topics || []).map(t => `<span class="tag">#${mathInner(t, kw)}</span>`).join("");
    return `<div class="q-card ${checked ? "selected" : ""}" data-id="${q.id}">
      <div class="q-top">
        <label class="q-check" title="勾选此题（可多选，再用顶部「加入组卷篮」批量加入）"><input type="checkbox" class="sel-chk" ${checked ? "checked" : ""} /><span></span></label>
        <span class="q-badge board-${q.board}">${q.board}</span>
        <span class="q-badge subj">${q.subject}</span>
        ${(Array.isArray(q.chapter) ? q.chapter : [q.chapter]).filter(Boolean).map(c => `<span class="q-badge chap">${mathInner(c, kw)}</span>`).join("")}
        ${q.examRef ? highlightHtml(`<span class="q-badge exam">${escapeHtml(q.examRef.label)}</span>`, kw) : ""}
        ${diffDots(q.difficulty)}
        ${q.marks ? `<span class="marks">[${q.marks} marks]</span>` : ""}
      </div>
      <div class="q-body">
        <div class="q-stem"><div class="mathrender">${mdToHtml(q.stem, kw)}</div>
          ${tags ? `<div class="q-tags">${tags}</div>` : ""}
        </div>
        ${figHtml}
      </div>
      ${q.solution ? `<div class="q-solution"><div class="sol-label">📝 详细解析 Solution</div>
        <div class="mathrender">${mdToHtml(q.solution, kw)}</div></div>` : ""}
      <div class="q-actions">
        ${q.solution ? `<button class="btn sm ghost sol-toggle" data-act="sol">👁 查看解析</button>` : ""}
        <button class="btn sm ai-btn" data-act="ai">🤖 AI 解析</button>
        <button class="btn sm ${inBasket ? "on" : ""}" data-act="basket">${inBasket ? "✓ 已加入组卷" : "＋ 加入组卷"}</button>
        <button class="btn sm ghost" data-act="edit">✏️ 编辑</button>
        <button class="btn sm ghost danger" data-act="del">🗑</button>
        ${q.source ? highlightHtml(`<span class="src">${escapeHtml(q.source)}</span>`, kw) : ""}
      </div>
    </div>`;
  }

  /* 题目卡片动作：用事件委托绑定在列表容器（一次性，重渲染不丢失） */
  function bindListActions() {
    $("#qList").addEventListener("click", e => {
      const btn = e.target.closest("[data-act]");
      if (!btn) return;
      const card = btn.closest(".q-card");
      if (!card) return;
      const id = card.dataset.id;
      const act = btn.dataset.act;
      if (act === "sol") {
        const sol = $(".q-solution", card);
        const open = sol.classList.toggle("open");
        btn.innerHTML = open ? "🙈 收起解析" : "👁 查看解析";
        if (open) {
          card.style.zIndex = "30";   // 展开时置顶，避免被下方绝对定位卡片遮挡
          typeset(sol, () => { renderTikz(sol); if (VL.active) vlMeasure(card, +card.dataset.vidx); });
        } else {
          card.style.zIndex = "";
          if (VL.active) vlMeasure(card, +card.dataset.vidx);
        }
      } else if (act === "basket") {
        toggleBasket(id);
      } else if (act === "edit") {
        openEdit(id);
      } else if (act === "ai") {
        const q = Store.all().find(x => x.id === id);
        if (q) sendQuestionToAI(q);
      } else if (act === "del") {
        confirmDialog("确定删除这道题？").then(ok => {
          if (!ok) return;
          Store.remove(id);
          state.basket = state.basket.filter(x => x !== id); saveBasket();
          refresh(); toast("已删除");
        });
      }
    });
  }

  /* ---------- AI 题目解析（前端直连用户自有 API） ---------- */
  const AI_CFG_KEY = "aiConfig";
  let aiHistory = [];   // 对话历史：[{role:'user'|'assistant', content: string | array}]

  function loadAIConfig() {
    try { return JSON.parse(localStorage.getItem(AI_CFG_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveAIConfig(cfg) { localStorage.setItem(AI_CFG_KEY, JSON.stringify(cfg)); }

  function openAIChat() { const c = $("#aiChat"); c.classList.add("open"); const i = $("#aiInput"); if (i) i.focus(); }
  function closeAIChat() { $("#aiChat").classList.remove("open"); }
  function toggleAIChat() { $("#aiChat").classList.contains("open") ? closeAIChat() : openAIChat(); }

  function openAISettings() {
    const c = loadAIConfig();
    $("#aiBaseUrl").value = c.baseUrl || "";
    $("#aiApiKey").value = c.apiKey || "";
    $("#aiModel").value = c.model || "";
    $("#aiSystem").value = c.systemPrompt ||
      "你是一位耐心的中学数学辅导老师，用中文讲解，给出清晰的解题思路与逐步推导，必要时使用 LaTeX 公式（行内用 $...$，独立公式用 $$...$$）。";
    $("#aiSettingsOverlay").classList.add("open");
  }
  function closeAISettings() { $("#aiSettingsOverlay").classList.remove("open"); }

  function appendAIBubble(role, html) {
    const wrap = document.createElement("div");
    wrap.className = "ai-msg " + (role === "user" ? "ai-user" : "ai-bot");
    const body = document.createElement("div");
    body.className = "ai-msg-body";
    body.innerHTML = html;
    wrap.appendChild(body);
    $("#aiMessages").appendChild(wrap);
    const box = $("#aiMessages");
    box.scrollTop = box.scrollHeight;
    return wrap;
  }

  function normalizeFigures(fig) {
    if (!fig) return [];
    return (Array.isArray(fig) ? fig : [fig]).filter(Boolean);
  }
  function blobToDataURL(blob) {
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onload = () => res(fr.result);
      fr.onerror = rej;
      fr.readAsDataURL(blob);
    });
  }
  // 组装 messages content：文本 + 尽量把题目配图转 base64 作为多模态（失败则降级纯文本并提示）
  async function buildAIContent(text, figures) {
    const figs = normalizeFigures(figures);
    if (!figs.length) return text;
    const parts = [{ type: "text", text: text }];
    let attached = 0;
    for (const f of figs) {
      try {
        const url = (/^https?:|^data:/.test(f)) ? f : (location.origin + "/" + f.replace(/^\//, ""));
        const r = await fetch(url);
        if (!r.ok) continue;
        const b64 = await blobToDataURL(await r.blob());
        parts.push({ type: "image_url", image_url: { url: b64 } });
        attached++;
      } catch (e) { /* file:// 下跨域等无法读取的图，忽略 */ }
    }
    if (!attached) {
      parts[0].text += "\n\n（注：本题配有图片 " + figs.length + " 张，但我无法读取，请仅依据上述文本推理。）";
    }
    return parts;
  }

  async function aiSend(userText, opts) {
    userText = (userText || "").trim();
    if (!userText) return;
    const cfg = loadAIConfig();
    if (!cfg.apiKey || !cfg.baseUrl) {
      toast("请先配置 AI 接口");
      openAISettings();
      return;
    }
    appendAIBubble("user", escapeHtml(userText).replace(/\n/g, "<br>"));
    const content = await buildAIContent(userText, opts && opts.figure);
    aiHistory.push({ role: "user", content: content });

    const bubble = appendAIBubble("assistant", "<span class=\"ai-think\">思考中…</span>");
    const body = bubble.querySelector(".ai-msg-body");
    const box = $("#aiMessages");
    let acc = "";
    let lastPaint = 0;
    const PAINT_MS = 120;   // 节流：流式每 120ms 最多重排一次，避免高频 MathJax 全量重排卡死
    const paint = () => { body.innerHTML = mdToHtml(acc); typeset(body); box.scrollTop = box.scrollHeight; };
    try {
      const url = cfg.baseUrl.replace(/\/+$/, "") + "/chat/completions";
      const msgs = (cfg.systemPrompt ? [{ role: "system", content: cfg.systemPrompt }] : []).concat(aiHistory);
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + cfg.apiKey },
        body: JSON.stringify({ model: cfg.model || "gpt-4o-mini", messages: msgs, stream: true })
      });
      if (!resp.ok) {
        const errTxt = await resp.text().catch(() => "");
        throw new Error("HTTP " + resp.status + " " + (errTxt || "").slice(0, 400));
      }
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop();
        for (const line of lines) {
          const t = line.trim();
          if (!t || !t.startsWith("data:")) continue;
          const data = t.slice(5).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices && json.choices[0] && json.choices[0].delta && json.choices[0].delta.content;
            if (delta) { acc += delta; const now = Date.now(); if (now - lastPaint >= PAINT_MS) { lastPaint = now; paint(); } }
          } catch (e) { /* 忽略不完整片段 */ }
        }
      }
      paint();   // 流结束强制完整渲染（含公式排版）
      if (!acc) body.innerHTML = "<span class=\"ai-err\">（模型未返回内容）</span>";
      aiHistory.push({ role: "assistant", content: acc });
      if (opts && typeof opts.onDone === "function") opts.onDone(acc);   // 回写题目等后续处理
    } catch (err) {
      body.innerHTML = "<span class=\"ai-err\">请求失败：" + escapeHtml(String(err && err.message ? err.message : err)) + "</span>";
      aiHistory.pop();  // 失败不计历史，便于重试
    }
  }

  function sendQuestionToAI(q) {
    openAIChat();
    const prompt = "请详细解析以下题目：给出解题思路、关键步骤与最终答案。只输出解析正文，不要寒暄或结尾客套话。题目如下：\n\n" + (q.stem || "");
    aiSend(prompt, { figure: q.figure, onDone: (text) => saveAIToSolution(q, text) });
  }

  // AI 解析回写题目：原无解析直接写入；已有解析则询问是否替换
  function saveAIToSolution(q, text) {
    if (!text || !text.trim()) return;
    const cur = Store.all().find(x => x.id === q.id) || q;
    const hasExisting = cur.solution && cur.solution.trim();
    const apply = () => {
      const updated = Object.assign({}, cur, { solution: text, _edited: true });
      Store.upsert(updated);
      if (VL.active) {
        const inView = VL.items.some(x => x.id === updated.id);
        const stillMatches = filteredQuestions().some(x => x.id === updated.id);
        if (inView && stillMatches) vlUpdateItem(updated);
        else refresh();
      } else refresh();
      toast(hasExisting ? "已用 AI 解析替换原有解析" : "已将 AI 解析写入本题");
    };
    if (hasExisting) {
      confirmDialog("本题已有解析，是否用 AI 生成的解析替换原有解析？").then(ok => {
        if (ok) apply(); else toast("已保留原解析");
      });
    } else {
      apply();
    }
  }

  function aiSendCurrent() {
    const list = filteredQuestions();
    if (!list.length) { toast("当前没有可发送的题目"); return; }
    openAIChat();
    aiSend("请解析以下题目：\n\n" + (list[0].stem || ""), { figure: list[0].figure });
  }

  /* ---------- 组卷篮 ---------- */
  function toggleBasket(id) {
    const i = state.basket.indexOf(id);
    if (i >= 0) { state.basket.splice(i, 1); toast("已移出组卷篮"); }
    else { state.basket.push(id); toast("已加入组卷篮"); }
    saveBasket(); updateBasketBadge();
    // 仅更新当前可见卡片上的「加入组卷」按钮，不整页重渲染
    const node = VL.active ? vlNodeById(id) : null;
    if (node) {
      const b = node.querySelector('[data-act="basket"]');
      if (b) { const on = state.basket.includes(id); b.classList.toggle("on", on); b.textContent = on ? "✓ 已加入组卷" : "＋ 加入组卷"; }
    }
    renderDrawer();
  }
  function updateBasketBadge() {
    const n = $("#basketN");
    if (state.basket.length) { n.style.display = ""; n.textContent = state.basket.length; }
    else n.style.display = "none";
  }
  function renderDrawer() {
    const body = $("#drawerBody");
    if (!state.basket.length) {
      body.innerHTML = `<div class="empty"><div class="big">🧺</div>组卷篮为空<br>
        <span style="font-size:12px">在题目卡片点击「加入组卷」</span></div>`;
      return;
    }
    const all = Store.all();
    let totalMarks = 0;
    const html = state.basket.map((id, idx) => {
      const q = all.find(x => x.id === id);
      if (!q) return "";
      totalMarks += Number(q.marks) || 0;
      return `<div class="basket-item" data-id="${id}">
        <div class="bi-idx">${idx + 1}</div>
        <div class="bi-main">
          <div class="bi-meta">${q.board} · ${q.subject} ${(Array.isArray(q.chapter) ? q.chapter : [q.chapter]).filter(Boolean).length ? "· " + (Array.isArray(q.chapter) ? q.chapter : [q.chapter]).filter(Boolean).map(c => mathInner(c)).join(" / ") : ""} ${q.marks ? "· " + q.marks + "m" : ""}</div>
          <div class="bi-stem">${escapeHtml((q.stem || "").replace(/\$|\*|\\/g, "").slice(0, 80))}</div>
        </div>
        <div class="bi-ctrl">
          <button data-mv="up" title="上移">▲</button>
          <button data-mv="down" title="下移">▼</button>
          <button data-mv="rm" title="移除">✕</button>
        </div>
      </div>`;
    }).join("");
    body.innerHTML = `<div class="list-meta"><span>共 ${state.basket.length} 题</span><span>总分 ${totalMarks} marks</span></div>` + html;
    typeset(body); renderTikz(body);

    $$(".basket-item", body).forEach(it => {
      const id = it.dataset.id;
      $$("[data-mv]", it).forEach(b => {
        b.onclick = () => {
          const i = state.basket.indexOf(id);
          if (b.dataset.mv === "up" && i > 0) { [state.basket[i - 1], state.basket[i]] = [state.basket[i], state.basket[i - 1]]; }
          else if (b.dataset.mv === "down" && i < state.basket.length - 1) { [state.basket[i + 1], state.basket[i]] = [state.basket[i], state.basket[i + 1]]; }
          else if (b.dataset.mv === "rm") { state.basket.splice(i, 1); }
          saveBasket(); updateBasketBadge(); renderDrawer(); renderList();
        };
      });
    });
  }

  /* ---------- 组卷多选 ---------- */
  // 更新顶部选择工具条：全选框状态、已选数量、批量按钮可用性
  function renderSelBar() {
    const vis = filteredQuestions().map(q => q.id);
    const selVis = vis.filter(id => state.selected.includes(id));
    const n = state.selected.length;
    const count = $("#selCount");
    if (count) count.textContent = n;
    const all = $("#selAllChk");
    if (all) {
      all.checked = vis.length > 0 && selVis.length === vis.length;
      all.indeterminate = selVis.length > 0 && selVis.length < vis.length;
    }
    const toB = $("#selToBasket");
    if (toB) toB.disabled = n === 0;
  }

  function bindSelection() {
    // 卡片复选框：勾选/取消（事件委托，重渲染不丢失）
    $("#qList").addEventListener("change", e => {
      const chk = e.target.closest(".sel-chk");
      if (!chk) return;
      const card = chk.closest(".q-card");
      const id = card.dataset.id;
      const i = state.selected.indexOf(id);
      if (chk.checked) {
        if (i < 0) state.selected.push(id);
        card.classList.add("selected");
      } else {
        if (i >= 0) state.selected.splice(i, 1);
        card.classList.remove("selected");
      }
      renderSelBar();
    });

    // 全选 / 取消全选（针对当前筛选出的全部题目）
    $("#selAllChk").addEventListener("change", e => {
      const vis = filteredQuestions().map(q => q.id);
      const visSet = new Set(vis);
      if (e.target.checked) {
        vis.forEach(id => { if (!state.selected.includes(id)) state.selected.push(id); });
        $$(".q-card").forEach(c => { c.classList.add("selected"); const ch = $(".sel-chk", c); if (ch) ch.checked = true; });
      } else {
        state.selected = state.selected.filter(id => !visSet.has(id));
        $$(".q-card").forEach(c => { c.classList.remove("selected"); const ch = $(".sel-chk", c); if (ch) ch.checked = false; });
      }
      renderSelBar();
    });

    // 批量加入组卷篮
    $("#selToBasket").addEventListener("click", () => {
      if (!state.selected.length) { toast("请先勾选题目"); return; }
      let added = 0;
      state.selected.forEach(id => {
        if (!state.basket.includes(id)) { state.basket.push(id); added++; }
      });
      saveBasket(); updateBasketBadge();
      toast(`已加入 ${added} 题到组卷篮（共 ${state.basket.length} 题）`);
      state.selected = [];
      renderList(); renderDrawer();
    });

    // 清空选择
    $("#selClear").addEventListener("click", () => {
      state.selected = [];
      renderList();
    });
  }

  /* ---------- 试卷生成 ---------- */
  // 纯渲染：把 qs 渲染成试卷并打开预览（组卷篮 / 随机组卷共用）
  function renderPaper(qs, opts) {
    opts = opts || {};
    const inc = !!opts.incSolution;
    const incSrc = !!opts.incSource;
    const title = opts.title || "数学练习卷";
    const boards = opts.boards || [...new Set(qs.map(q => q.board + " " + q.subject))].join(" / ");
    const totalMarks = qs.reduce((s, q) => s + (Number(q.marks) || 0), 0);

    let html = `<div class="paper-view">`;

    qs.forEach((q, i) => {
      const isFirst = i === 0;
      const srcText = q.examRef ? q.examRef.label : (q.source || "");
      html += `<div class="paper-q">
        ${isFirst ? `<div class="paper-head">
          <h1>${escapeHtml(title)}</h1>
          <div class="pmeta">${escapeHtml(boards)} &nbsp;|&nbsp; 共 ${qs.length} 题 &nbsp;|&nbsp; 满分 ${totalMarks} marks
            &nbsp;|&nbsp; ${inc ? "教师版（含解析）" : "学生版"}${incSrc ? " · 含来源" : ""}</div>
          <div class="pmeta" style="margin-top:6px">姓名 Name: ____________ &nbsp;&nbsp; 日期 Date: ____________</div>
        </div>` : ""}
        <div class="paper-qbody">
          <div class="paper-qline">
            <span class="pq-num">${i + 1}.</span>
            <span class="mathrender pq-stem">${mdToHtml(q.stem, state.search)}</span>
            <span class="pq-marks">[${q.marks || "—"} marks]</span>
          </div>
          ${incSrc && srcText ? `<div class="paper-src">${escapeHtml(srcText)}</div>` : ""}
          ${figureHtml(q.figure, "pq-fig")}
          ${q.hasGrid ? `<div class="paper-grid"><img src="data/images/grid_s1.png" alt="Graph paper grid" /></div>` : ""}
          ${q.hasSmallGrid ? `<div class="paper-grid paper-grid-small"><img src="data/images/grid_s1_small.png" alt="Small graph paper grid" /></div>` : ""}
          ${inc
            ? `<div class="paper-sol"><div class="sl">Solution / 解析</div>
                <div class="mathrender">${mdToHtml(q.solution || "（暂无解析）", state.search)}</div></div>`
            : `<div class="paper-blank"></div>`}
        </div>
      </div>`;
    });
    html += `</div>`;

    $("#printArea").innerHTML = html;
    openOverlay("#paperOverlay");
    typeset($("#printArea"));
    renderTikz($("#printArea"));
  }

  // 真题年份（用于按年份排序）；回退：解析 id 中的两位年份（如 cie_p3_20FM32 → 2020）
  function yearOf(q) {
    const y = q.examRef && q.examRef.year;
    if (y) return Number(y) || 0;
    const m = String(q.id || q.source || "").match(/_?(\d{2})(?:[A-Z]{2}\d{2})?_/);
    return m ? 2000 + Number(m[1]) : 0;
  }

  function generatePaper() {
    if (!state.basket.length) { toast("组卷篮为空"); return; }
    const inc = $("#incSolution").checked;
    const incSrc = $("#incSource").checked;
    const title = $("#paperTitle").value.trim() || "数学练习卷";
    const all = Store.all();
    let qs = state.basket.map(id => all.find(x => x.id === id)).filter(Boolean);
    const sortMode = $("#sortMarks").value;
    if (sortMode) {
      qs = qs.slice().sort((a, b) => {
        if (sortMode === "year") return yearOf(a) - yearOf(b);
        const ma = Number(a.marks) || 0, mb = Number(b.marks) || 0;
        return sortMode === "asc" ? ma - mb : mb - ma;
      });
    }
    renderPaper(qs, { title, incSolution: inc, incSource: incSrc });
  }

  /* ---------- 随章节随机组卷 ---------- */
  // 官方满分：纯数 Pure（科目以 P 开头）75 分；力学/统计（M*/S*）50 分（CIE / Edexcel 同规则）
  function officialFullMarks(subject) {
    return /^P/i.test(subject || "") ? 75 : 50;
  }
  function questionsOfChapter(pool, chapter) {
    return pool.filter(q => {
      const ch = Array.isArray(q.chapter) ? q.chapter : [q.chapter];
      return ch.indexOf(chapter) !== -1;
    });
  }
  function generateRandomPaper(board, subject) {
    const all = Store.all();
    const pool = all.filter(q => q.board === board && q.subject === subject);
    if (!pool.length) { toast(`题库中暂无 ${board} ${subject} 的题目`); return; }
    // 章节清单：优先用预设；无预设则按题库中实际出现的章节去重
    let chapters = (CHAPTER_PRESETS[board + "|" + subject] || []).slice();
    if (!chapters.length) {
      const set = new Set();
      pool.forEach(q => (Array.isArray(q.chapter) ? q.chapter : [q.chapter]).forEach(c => c && set.add(c)));
      chapters = [...set];
    }
    if (!chapters.length) { toast(`${board} ${subject} 的题目未标注章节，无法随机组卷`); return; }

    const full = officialFullMarks(subject);
    const marksOf = q => Number(q.marks) || 0;
    const picked = [];
    const ids = new Set();
    let total = 0;
    const pick = q => { picked.push(q); ids.add(q.id); total += marksOf(q); };

    // 第一遍：每个章节抽 1 题（尽量不与已抽重复）
    for (const ch of chapters) {
      let cand = questionsOfChapter(pool, ch).filter(q => !ids.has(q.id));
      if (!cand.length) cand = questionsOfChapter(pool, ch); // 题目不足时允许复用
      if (!cand.length) continue;                            // 该章节无题则跳过
      pick(cand[Math.floor(Math.random() * cand.length)]);
    }
    if (!picked.length) { toast(`${board} ${subject} 无可用题目`); return; }

    // 第二遍：满分未满则随机重复某章节的题目补足
    let guard = 0;
    while (total < full && guard < 500) {
      guard++;
      const avail = chapters.filter(c => questionsOfChapter(pool, c).length);
      if (!avail.length) break;
      const ch = avail[Math.floor(Math.random() * avail.length)];
      const cand = questionsOfChapter(pool, ch);
      pick(cand[Math.floor(Math.random() * cand.length)]);
    }

    // 排序：按年份排序优先；否则按分值（选择器指定降序用降序，其余保持原有「从小到大」默认）
    const sortMode = $("#sortMarks").value;
    if (sortMode === "year") {
      picked.sort((a, b) => yearOf(a) - yearOf(b));
    } else {
      picked.sort((a, b) => sortMode === "desc" ? marksOf(b) - marksOf(a) : marksOf(a) - marksOf(b));
    }

    const title = ($("#randPaperTitle").value.trim()) || `${board} ${subject} 随章节随机卷（满分 ${full}）`;
    renderPaper(picked, { title, incSolution: $("#incSolution").checked, incSource: $("#incSource").checked, boards: `${board} ${subject}` });
    toast(`已生成：${picked.length} 题，合计 ${total} marks（满分 ${full}）`);
  }

  function fillRandSelects() {
    const b = $("#f_randBoard");
    if (!b) return;
    b.innerHTML = Object.keys(TAXONOMY).map(k => `<option value="${k}">${k}</option>`).join("");
    b.value = state.board || "CIE";
    const s = $("#f_randSubject");
    s.innerHTML = TAXONOMY[b.value].subjects.map(x => `<option value="${x.code}">${x.code} — ${x.name}</option>`).join("");
    s.value = state.subject || TAXONOMY[b.value].subjects[0].code;
    updateRandFullMarks();
  }
  function updateRandFullMarks() {
    const el = $("#randFullMarks");
    if (!el) return;
    el.textContent = `满分 ${officialFullMarks($("#f_randSubject").value)} marks`;
  }

  /* ---------- 新增/编辑 ---------- */
  function fillBoardSelect() {
    const b = $("#f_board");
    b.innerHTML = Object.keys(TAXONOMY).map(k => `<option value="${k}">${k}</option>`).join("");
  }
  function fillSubjectSelect(board) {
    const s = $("#f_subject");
    s.innerHTML = TAXONOMY[board].subjects.map(x => `<option value="${x.code}">${x.code} — ${x.name}</option>`).join("");
  }
  function fillChapterDatalist(board, subject) {
    const dl = $("#chapterList");
    const key = board + "|" + subject;
    const presets = CHAPTER_PRESETS[key] || [];
    dl.innerHTML = presets.map(c => `<option value="${escapeHtml(c)}">`).join("");
  }

  let editingFig = ""; // 当前编辑的配图 base64/path

  function openEdit(id) {
    const isNew = !id;
    $("#editTitle").textContent = isNew ? "新增题目" : "编辑题目";
    fillBoardSelect();
    let q;
    if (isNew) {
      q = { board: state.board || "CIE", subject: state.subject || "P1", difficulty: 3 };
    } else {
      q = Store.all().find(x => x.id === id) || {};
    }
    $("#f_id").value = q.id || "";
    $("#f_board").value = q.board || "CIE";
    fillSubjectSelect($("#f_board").value);
    $("#f_subject").value = q.subject || TAXONOMY[$("#f_board").value].subjects[0].code;
    fillChapterDatalist($("#f_board").value, $("#f_subject").value);
    $("#f_chapter").value = Array.isArray(q.chapter) ? q.chapter.join(", ") : (q.chapter || "");
    $("#f_topics").value = (q.topics || []).join(", ");
    $("#f_diff").value = q.difficulty || 3;
    $("#f_marks").value = q.marks || "";
    $("#f_source").value = q.source || "";
    updateSrcHint();
    $("#f_stem").value = q.stem || "";
    $("#f_solution").value = q.solution || "";
    editingFig = q.figure || "";
    // 画图格纸选项：仅 S1 显示（S1 频数分布图/累积频数/散点图等需作图）
    const isS1 = ($("#f_subject").value || "").toUpperCase().includes("S1");
    $("#gridOptionRow").style.display = isS1 ? "" : "none";
    $("#f_hasGrid").checked = !!q.hasGrid;
    $("#f_hasSmallGrid").checked = !!q.hasSmallGrid;
    renderFigPreview();
    updatePreview();
    renderSolImgList();
    openOverlay("#editOverlay");
  }

  function renderFigPreview() {
    const p = $("#imgPreview");
    if (editingFig) {
      const arr = Array.isArray(editingFig) ? editingFig : [editingFig];
      const imgs = arr.map(p => `<img src="${p}" alt="配图预览" style="max-width:160px;margin:4px;border:1px solid var(--border);border-radius:6px"/>`).join("");
      p.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:6px">${imgs}</div>
        <div><button class="btn sm ghost danger" id="rmFig" style="margin-top:6px">移除配图</button></div>`;
      $("#rmFig").onclick = () => { editingFig = ""; renderFigPreview(); };
    } else p.innerHTML = "";
  }

  function updatePreview() {
    $("#stemPreview").innerHTML = mdToHtml($("#f_stem").value) || '<span style="color:#94a3b8">（预览区）</span>';
    $("#solPreview").innerHTML = mdToHtml($("#f_solution").value) || '<span style="color:#94a3b8">（预览区）</span>';
    typeset($("#stemPreview")); typeset($("#solPreview"));
    renderTikz($("#stemPreview")); renderTikz($("#solPreview"));
  }

  /** 来源输入框实时解析提示 */
  function updateSrcHint() {
    const r = parseExamRef($("#f_source").value);
    const h = $("#srcHint");
    if (r) { h.style.display = ""; h.textContent = "✓ 已识别真题：" + r.label + "（将自动按年份/卷号归档，卷号 " + r.paper + "）"; }
    else h.style.display = "none";
  }

  function saveEdit() {
    const stem = $("#f_stem").value.trim();
    if (!stem) { toast("请填写题目正文"); return; }
    const id = $("#f_id").value || Store.newId();
    const q = {
      id,
      board: $("#f_board").value,
      subject: $("#f_subject").value,
      chapter: $("#f_chapter").value.split(",").map(s => s.trim()).filter(Boolean),
      topics: $("#f_topics").value.split(/[,，]/).map(s => s.trim()).filter(Boolean),
      difficulty: Number($("#f_diff").value),
      marks: $("#f_marks").value ? Number($("#f_marks").value) : "",
      source: $("#f_source").value.trim(),
      examRef: parseExamRef($("#f_source").value) || undefined,
      stem,
      figure: editingFig,
      hasGrid: $("#f_hasGrid").checked || undefined,
      hasSmallGrid: $("#f_hasSmallGrid").checked || undefined,
      solution: $("#f_solution").value.trim(),
      createdAt: Date.now(),
      _edited: true // 标记为用户在网页中编辑/新增的内容，Store 合并时绝不覆盖
    };
    Store.upsert(q);
    closeOverlay("#editOverlay");
    if (VL.active) {
      const inView = VL.items.some(x => x.id === q.id);
      const stillMatches = filteredQuestions().some(x => x.id === q.id);
      if (inView && stillMatches) vlUpdateItem(q);   // 仅精准更新该卡片，不整页刷新
      else refresh();                                // 新题或筛选归属变化 → 重建窗口
    } else {
      refresh();
    }
    toast($("#f_id").value ? "已保存修改" : "已新增题目");
  }

  /* 图片处理 */
  function fileToBase64(file, cb) {
    const r = new FileReader();
    r.onload = () => cb(r.result);
    r.readAsDataURL(file);
  }

  /* 解析配图：把选择的图片文件转成 data URI 存入 solution 文本。
     过大/过大的图先等比缩放到最大边 1000px、转 JPEG(q0.85)，保护 localStorage 配额。 */
  function fileToImageDataUrl(file, cb) {
    const MAX = 1000;
    if (!file || !file.type || file.type.indexOf("image") !== 0) { cb(""); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        if (img.width <= MAX && img.height <= MAX && file.size <= 700 * 1024) { cb(reader.result); return; }
        const scale = Math.min(1, MAX / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * scale)), h = Math.max(1, Math.round(img.height * scale));
        const cv = document.createElement("canvas");
        cv.width = w; cv.height = h;
        cv.getContext("2d").drawImage(img, 0, 0, w, h);
        try { cb(cv.toDataURL("image/jpeg", 0.85)); }
        catch (e) { cb(reader.result); }
      };
      img.onerror = () => cb(reader.result);
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  /* 在 textarea 光标处插入文本（无选区则追加到末尾） */
  function insertAtCursor(ta, text) {
    const start = ta.selectionStart ?? ta.value.length;
    const end = ta.selectionEnd ?? ta.value.length;
    ta.value = ta.value.slice(0, start) + text + ta.value.slice(end);
    const pos = start + text.length;
    ta.selectionStart = ta.selectionEnd = pos;
    ta.focus();
  }

  /* 解析中已嵌入的图片列表（从 solution 文本里抓 ![alt](src)） */
  function getSolImages() {
    const txt = $("#f_solution").value || "";
    const re = /!\[([^\]]*)\]\(([^)\s]+)\)/g;
    let m; const out = [];
    while ((m = re.exec(txt))) out.push({ alt: m[1], src: m[2], idx: m.index, len: m[0].length });
    return out;
  }

  /* 编辑弹窗里渲染「已插入解析图片」缩略图列表，可单独移除 */
  function renderSolImgList() {
    const el = $("#solImgList");
    if (!el) return;
    const list = getSolImages();
    if (!list.length) { el.innerHTML = ""; return; }
    el.innerHTML = list.map((im, i) =>
      `<div class="sol-thumb"><img src="${escapeAttr(im.src)}" alt=""/><button class="btn sm ghost danger" data-rm="${i}" title="移除该图">✕</button></div>`
    ).join("");
    el.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => {
      const arr = getSolImages();
      const tgt = arr[+b.dataset.rm];
      if (!tgt) return;
      let v = $("#f_solution").value;
      v = v.slice(0, tgt.idx) + v.slice(tgt.idx + tgt.len);
      $("#f_solution").value = v;
      updatePreview();
      renderSolImgList();
    });
  }

  /* 在解析中插入一张图片（点击选择或粘贴） */
  function insertSolutionImage(file) {
    fileToImageDataUrl(file, b64 => {
      if (!b64) return;
      const n = getSolImages().length + 1;
      insertAtCursor($("#f_solution"), `\n![图${n}](${b64})\n`);
      updatePreview();
      renderSolImgList();
      toast("已在解析中插入图片");
    });
  }

  /* ---------- 导入 / 导出 ---------- */
  function exportJSON() {
    const data = Store.all();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `mathbank_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    toast(`已导出 ${data.length} 题`);
  }
  function importJSON(file) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const arr = JSON.parse(r.result);
        if (!Array.isArray(arr)) throw new Error("格式错误");
        const cur = Store.all();
        const map = {};
        cur.forEach(q => map[q.id] = q);
        arr.forEach(q => { if (q && q.id) map[q.id] = q; });
        Store.replaceAll(Object.values(map)).then(() => {
          refresh();
          toast(`已导入，当前共 ${Store.all().length} 题`);
        });
      } catch (e) { toast("导入失败：" + e.message); }
    };
    r.readAsText(file);
  }

  /* ---------- 批量导入 Excel / CSV（4 列：考试局/科目 · 来源 · 题干 · 配图）---------- */
  function normHeader(h) { return String(h || "").toLowerCase().replace(/\s+/g, ""); }

  // 表头 → 字段 映射（支持中英文、容错）
  function mapHeaders(headers) {
    const H = headers.map(normHeader);
    const find = (...keys) => {
      for (const k of keys) {
        const i = H.findIndex(x => x.includes(k));
        if (i >= 0) return i;
      }
      return -1;
    };
    // 组合列：考试局/科目（同时含 board 与 subject 字样）
    const combined = H.findIndex(x => (x.includes("考试局") || x.includes("board") || x.includes("大类")) && (x.includes("科目") || x.includes("subject")));
    const map = {
      board: combined >= 0 ? combined : find("考试局", "board"),
      subject: combined >= 0 ? combined : find("科目", "subject"),
      source: find("来源", "source"),
      stem: find("题干", "stem", "question", "题目"),
      figure: find("配图", "figure"),
      chapter: (find("章节", "chapter") || "").split(/[,，]/).map(s => s.trim()).filter(Boolean),
      topics: find("考点", "topics", "标签", "tags"),
      diff: find("难度", "difficulty"),
      marks: find("分值", "marks", "分数"),
      solution: find("解析", "解答", "solution")
    };
    return map;
  }

  function parseBoardSubject(s) {
    if (!s) return { board: "", subject: "" };
    let t = String(s).trim();
    // 兼容 "Edexcel/FP2" 或 "Edexcel FP2"
    let board, subject;
    if (t.includes("/")) { [board, subject] = t.split("/"); }
    else { const sp = t.split(/\s+/); board = sp[0]; subject = sp.slice(1).join(" "); }
    board = (board || "").trim();
    subject = (subject || "").trim();
    // 归一化 board 大小写
    if (board.toLowerCase() === "cie") board = "CIE";
    if (board.toLowerCase() === "edexcel") board = "Edexcel";
    return { board, subject };
  }

  function buildBatchRow(row, map, idx, usedIds) {
    const get = k => { const i = map[k]; return i >= 0 ? (row[i] != null ? String(row[i]).trim() : "") : ""; };
    const { board, subject } = parseBoardSubject(get("board") || get("subject"));
    const stem = get("stem");
    if (!board || !subject || !stem) return null; // 缺关键字段，跳过
    const source = get("source");
    const fig = get("figure");
    const examRef = source ? parseExamRef(source) : undefined;
    // 生成稳定 id（同名重导入走 upsert，不会重复）
    let base = `batch_${board}_${subject}_${source || ("row" + (idx + 1))}`.replace(/[^A-Za-z0-9_]/g, "_");
    let id = base, n = 2;
    while (usedIds.has(id)) { id = base + "_" + n; n++; }
    usedIds.add(id);
    const topicsRaw = get("topics");
    const topics = topicsRaw ? topicsRaw.split(/[、,;，；]/).map(s => s.trim()).filter(Boolean) : [];
    const diff = parseInt(get("diff"), 10);
    const marks = parseInt(get("marks"), 10);
    return {
      id,
      board, subject,
      chapter: (() => { const c = get("chapter"); return Array.isArray(c) ? c : (c ? [c] : []); })(),
      topics,
      difficulty: isNaN(diff) ? 2 : Math.min(5, Math.max(1, diff)),
      marks: isNaN(marks) ? 0 : marks,
      source: source || "",
      stem,
      figure: fig || "",
      solution: get("solution") || "",
      examRef: examRef || undefined,
      createdAt: Date.now()
    };
  }

  function importBatchFile(file) {
    if (typeof XLSX === "undefined") {
      toast("批量导入需要联网加载 Excel 解析库，请检查网络后重试");
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const wb = XLSX.read(e.target.result, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
        if (!rows.length) { toast("表格为空"); return; }
        // 找到含表头的首行（表头应含 题干/stem 等关键字）
        let headerIdx = 0;
        for (let i = 0; i < Math.min(rows.length, 5); i++) {
          if (rows[i].some(c => { const s = normHeader(c); return s.includes("题干") || s.includes("stem") || s.includes("来源") || s.includes("source"); })) { headerIdx = i; break; }
        }
        const map = mapHeaders(rows[headerIdx]);
        if (map.stem < 0 || map.board < 0) {
          toast("未识别到「题干」「考试局/科目」列，请检查表头");
          return;
        }
        const usedIds = new Set();
        let ok = 0, skip = 0;
        const imported = [];
        for (let i = headerIdx + 1; i < rows.length; i++) {
          const row = rows[i];
          if (!row || row.every(c => !String(c).trim())) continue; // 空行
          const q = buildBatchRow(row, map, i, usedIds);
          if (!q) { skip++; continue; }
          imported.push(q);
          ok++;
        }
        // 按 Excel 行顺序一次性合并：本次导入放最前（保持卷内 Q1→Q11 顺序），
        // 其余旧题跟在后面。避免 Store.upsert 的 unshift 把整批顺序反转（曾导致「第5题变第7题」）。
        const list = Store.all();
        const importedIds = new Set(imported.map(q => q.id));
        const merged = imported.concat(list.filter(q => !importedIds.has(q.id)));
        Store.replaceAll(merged).then(() => {
          refresh();
          toast(`批量导入完成：成功 ${ok} 题${skip ? "，跳过 " + skip + " 行（缺字段）" : ""}`);
        });
      } catch (err) {
        toast("批量导入失败：" + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  /* ---------- 弹窗控制 ---------- */
  function openOverlay(sel) { $(sel).classList.add("open"); }
  function closeOverlay(sel) { $(sel).classList.remove("open"); }

  /* ---------- 配图点击放大 ---------- */
  function openLightbox(src) {
    const lb = $("#imgLightbox");
    if (!lb || !src) return;
    $("#imgLightboxImg").src = src;
    lb.classList.add("open");
  }

  /* ---------- 刷新 ---------- */
  function refresh() {
    renderSidebar();
    renderHead();
    renderChapterFilter();
    renderExamFilters();
    renderList();
    updateBasketBadge();
  }

  /* ---------- 事件绑定 ---------- */
  function bindEvents() {
    vlInit();            // 虚拟滚动列表初始化（绑定滚动容器 + 滚动监听）
    bindListActions();   // 题目卡片动作（事件委托，一次性）
    bindSelection();     // 组卷多选：卡片复选框 / 全选 / 批量加入

    $("#searchInput").addEventListener("input", e => { state.search = e.target.value; state.page = 1; renderList(); });
    $("#filterChapter").addEventListener("change", e => { state.chapter = e.target.value; state.page = 1; renderList(); });
    $("#filterYear").addEventListener("change", e => { state.year = e.target.value; state.page = 1; renderList(); });
    $("#filterMonth").addEventListener("change", e => { state.month = e.target.value; state.page = 1; renderList(); });
    $("#filterPaper").addEventListener("change", e => { state.paper = e.target.value; state.page = 1; renderList(); });
    $("#filterDiff").addEventListener("change", e => { state.diff = e.target.value; state.page = 1; renderList(); });

    // 分页器（事件委托，页码按钮动态生成）
    $("#pager").addEventListener("click", e => {
      const btn = e.target.closest("[data-pg]");
      if (!btn || btn.disabled) return;
      const v = btn.dataset.pg;
      const pages = Math.max(1, Math.ceil(filteredQuestions().length / PAGE_SIZE));
      if (v === "prev") state.page = Math.max(1, state.page - 1);
      else if (v === "next") state.page = Math.min(pages, state.page + 1);
      else { const n = parseInt(v, 10); if (!isNaN(n)) state.page = n; }
      renderList();
    });

    $("#btnAdd").onclick = () => openEdit(null);
    $("#btnExport").onclick = exportJSON;
    $("#btnImport").onclick = () => $("#importFile").click();
    $("#btnBatch").onclick = () => $("#batchFile").click();

    // AI 对话
    $("#btnAIChat").onclick = toggleAIChat;
    $("#btnAISettings").onclick = openAISettings;
    $("#aiSettingsClose").onclick = closeAISettings;
    $("#aiSettingsSave").onclick = () => {
      saveAIConfig({
        baseUrl: $("#aiBaseUrl").value.trim(),
        apiKey: $("#aiApiKey").value.trim(),
        model: $("#aiModel").value.trim(),
        systemPrompt: $("#aiSystem").value.trim()
      });
      closeAISettings();
      toast("AI 配置已保存");
    };
    $("#aiSettingsClear").onclick = () => {
      localStorage.removeItem(AI_CFG_KEY);
      $("#aiBaseUrl").value = ""; $("#aiApiKey").value = ""; $("#aiModel").value = ""; $("#aiSystem").value = "";
      toast("已清除 AI 配置");
    };
    $("#aiClose").onclick = closeAIChat;
    $("#aiClear").onclick = () => { aiHistory = []; $("#aiMessages").innerHTML = ""; };
    $("#aiSend").onclick = () => { const v = $("#aiInput").value; $("#aiInput").value = ""; aiSend(v); };
    $("#aiSendCurrent").onclick = aiSendCurrent;
    $("#aiInput").addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); const v = $("#aiInput").value; $("#aiInput").value = ""; aiSend(v); }
    });
    $("#batchFile").onchange = e => { if (e.target.files[0]) importBatchFile(e.target.files[0]); e.target.value = ""; };
    $("#importFile").onchange = e => { if (e.target.files[0]) importJSON(e.target.files[0]); e.target.value = ""; };

    // 组卷抽屉
    $("#btnBasket").onclick = () => { renderDrawer(); fillRandSelects(); $("#drawer").classList.add("open"); };
    $("#drawerClose").onclick = () => $("#drawer").classList.remove("open");
    $("#clearBasket").onclick = () => confirmDialog("清空组卷篮？").then(ok => {
      if (!ok) return;
      state.basket = []; saveBasket(); updateBasketBadge(); renderDrawer(); renderList();
    });
    $("#genPaper").onclick = generatePaper;
    // 随章节随机组卷
    fillRandSelects();
    $("#genRandomPaper").onclick = () => generateRandomPaper($("#f_randBoard").value, $("#f_randSubject").value);
    $("#f_randBoard").onchange = e => {
      const s = $("#f_randSubject");
      s.innerHTML = TAXONOMY[e.target.value].subjects.map(x => `<option value="${x.code}">${x.code} — ${x.name}</option>`).join("");
      s.value = TAXONOMY[e.target.value].subjects[0].code;
      updateRandFullMarks();
    };
    $("#f_randSubject").onchange = updateRandFullMarks;

    // 编辑弹窗
    $("#editClose").onclick = $("#editCancel").onclick = () => closeOverlay("#editOverlay");
    $("#editSave").onclick = saveEdit;
    $("#f_board").onchange = e => { fillSubjectSelect(e.target.value); fillChapterDatalist(e.target.value, $("#f_subject").value); };
    $("#f_subject").onchange = e => { fillChapterDatalist($("#f_board").value, e.target.value);
      // S1 显示画图格纸选项
      const isS1 = (e.target.value || "").toUpperCase().includes("S1");
      $("#gridOptionRow").style.display = isS1 ? "" : "none";
    };
    let previewTimer;
    ["#f_stem", "#f_solution"].forEach(s => $(s).addEventListener("input", () => {
      clearTimeout(previewTimer); previewTimer = setTimeout(updatePreview, 350);
    }));
    $("#f_source").addEventListener("input", updateSrcHint);

    // 配图上传
    $("#imgDrop").onclick = () => $("#f_figFile").click();
    $("#f_figFile").onchange = e => {
      if (e.target.files[0]) fileToBase64(e.target.files[0], b64 => { editingFig = b64; renderFigPreview(); });
    };
    // 解析配图插入（点击选择 / 多选）
    $("#solImgBtn").onclick = () => $("#f_solFile").click();
    $("#f_solFile").onchange = e => {
      [...(e.target.files || [])].forEach(insertSolutionImage);
      e.target.value = "";
    };
    // 粘贴截图（编辑弹窗打开时）：焦点在解析框 → 插入解析图片；否则 → 设为题干配图
    document.addEventListener("paste", e => {
      if (!$("#editOverlay").classList.contains("open")) return;
      const items = (e.clipboardData || {}).items || [];
      for (const it of items) {
        if (it.type && it.type.indexOf("image") === 0) {
          e.preventDefault();
          if (document.activeElement === document.getElementById("f_solution")) {
            insertSolutionImage(it.getAsFile());
          } else {
            fileToBase64(it.getAsFile(), b64 => { editingFig = b64; renderFigPreview(); toast("已粘贴配图"); });
          }
          break;
        }
      }
    });

    // 试卷弹窗
    $("#paperClose").onclick = () => closeOverlay("#paperOverlay");
    $("#printPaper").onclick = () => window.print();

    // 点击遮罩关闭
    $$(".overlay").forEach(o => o.addEventListener("click", e => { if (e.target === o) o.classList.remove("open"); }));
    // ESC 关闭
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") { $$(".overlay.open").forEach(o => o.classList.remove("open")); $("#drawer").classList.remove("open"); $("#aiChat").classList.remove("open"); }
    });

    // 配图点击放大（事件委托，重渲染后依然有效）
    document.addEventListener("click", e => {
      const img = e.target.closest("img.zoom-img");
      if (img) { e.preventDefault(); openLightbox(img.getAttribute("src")); return; }
      // 在放大层里点击图片本身也关闭
      if (e.target && e.target.id === "imgLightboxImg") closeOverlay("#imgLightbox");
    });
    $("#imgLightboxClose").onclick = () => closeOverlay("#imgLightbox");
  }

  /* ---------- 启动 ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    // 先异步初始化存储层（IndexedDB 合并），再渲染；失败则降级 localStorage 仍可用
    Store.init().then(() => {
      if (Store.remote) toast("已连接本地文件：编辑将保存到 data/store.json");
      refresh();
    }).catch(err => {
      console.error("题库初始化失败", err);
      try { refresh(); } catch (e2) { /* fallback 已建缓存，通常不会到这里 */ }
    });
  });
})();
