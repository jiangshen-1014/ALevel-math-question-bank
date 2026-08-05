# 资料库文件夹结构（真题卷原卷 / 官方 MS）

把真题卷 PDF 按下面的文件夹层级放好，网页「📚 资料库」会自动扫描并树形展示。
`qp` = 原卷（question paper），`ms` = 官方评分方案（mark scheme）。

## CIE（按 9709 / 9231 两大代码，按年份打包，不分单元）

```
assets/papers/CIE/
  9709/                                   # Mathematics（2001–2026）
    2001/
      Feb-Mar/{qp, ms}/
      May-Jun/{qp, ms}/
      Oct-Nov/{qp, ms}/
    2002/ … 2026/
  9231/                                   # Further Mathematics（2015–2026）
    2015/
      May-Jun/{qp, ms}/
      Oct-Nov/{qp, ms}/
    2016/ … 2026/
```

## Edexcel（按科目分，再按年份 / 考季）

```
assets/papers/Edexcel/
  P1/                                     # 科目 = 单元代码（P1/P2/P3/P4/S1/S2/M1/M2/D1/FP1/FP2…）
    2019/
      Jan/{qp, ms}/
      Jun/{qp, ms}/
      Oct/{qp, ms}/
    …
  S1/ …
```

## 文件名约定（决定「原卷 / 官方 MS」判定）
- 文件名含 `ms` / `mark scheme` / `markscheme` / `评分` / `答案` / `解答` → 判为**官方 MS**。
- 否则判为**原卷**。
- 也可直接放进对应 `qp` 或 `ms` 子文件夹，文件夹名优先决定类型。

## PDF 放好后
- 本地服务器模式：点资料库「🔄 刷新文件夹」即实时扫描（依赖 `server/server.js` 的 `GET /api/papers`）。
- 纯静态 / 双击打开：运行 `node tools/scan_papers.js` 生成 `manifest.json` 兜底清单，再刷新页面。

## 另一种方式：网页上传
不依赖文件夹，在资料库面板「⬆️ 上传资料」直接选 PDF 并填考试局/科目/年份/考季/类型，
存在浏览器本地（IndexedDB），与题目题库隔离。上传项可在此删除。
