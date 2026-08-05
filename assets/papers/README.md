# 资料库 · 真题卷与官方 MS 文件夹

把历年真题卷（原卷）和官方 Mark Scheme（MS）按下面的文件夹结构放进来，
网页「📚 资料库」会自动扫描并展示（考试局 → 科目 → 年份 → 考季 → 文件）。

## 目录结构（4 层文件夹 + 文件）

```
assets/papers/
└── {考试局 board}/
    └── {科目 subject}/
        └── {年份 year}/
            └── {考季 season}/
                ├── 文件名.pdf        ← 原卷（Question Paper）
                └── 文件名_ms.pdf      ← 官方 MS（文件名含 ms / mark scheme / 评分 / 答案 即判为 MS）
```

示例：

```
assets/papers/
├── CIE/
│   └── S1/
│       └── 2025/
│           ├── MJ/
│           │   ├── 25_MJ_53.pdf
│           │   └── 25_MJ_53_ms.pdf
│           └── ON/
│               └── 25_ON_51.pdf
└── Edexcel/
    └── P1/
        └── 2024/
            └── Jun/
                └── 2024_Jun_P1.pdf
```

## 字段说明

- **board（考试局）**：`CIE` / `Edexcel`
- **subject（科目）**：如 `S1` / `P3` / `P1` / `M1` / `FP1`
- **year（年份）**：如 `2025`（也接受 `25`）
- **season（考季）**：`MJ`（May/June）/ `FM`（Feb/March）/ `ON`（Oct/Nov），也可写 `Jun`/`Jan` 等自由文本
- **type（类型）**：由文件名自动判定——含 `ms` / `mark scheme` / `markscheme` / `评分` / `答案` 视为官方 MS，否则为原卷

## 让网页识别（二选一）

1. **用本地服务器**（推荐）：`node server/server.js`，网页自动调用 `/api/papers` 实时扫描，无需额外步骤。
2. **纯静态 / 双击打开**：往本文件夹增删 PDF 后，运行
   ```
   node tools/scan_papers.js
   ```
   生成 `manifest.json`，网页会读取它作为兜底清单。

> 注意：通过网页「📚 资料库 → 上传」加入的文件存在浏览器本地（IndexedDB），不会写进此文件夹。
> 此文件夹只用于你手动整理的真题卷 / MS。
