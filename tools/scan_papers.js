'use strict';
/*
 * scan_papers.js —— 生成 assets/papers/manifest.json（资料库文件夹扫描的静态兜底）。
 *
 * 用途：当网页不是由 server/server.js 提供（例如纯静态托管 / 直接双击打开）时，
 *       前端无法调用 /api/papers，会改读 assets/papers/manifest.json。
 *       每次往 assets/papers 添加/移动 PDF 后，运行本脚本刷新清单即可：
 *         node tools/scan_papers.js
 *
 * 目录约定见 server/papers_scan.js 顶部注释。
 */
const fs = require('fs');
const path = require('path');
const { scanPapersDir } = require('../server/papers_scan.js');

const ROOT = path.resolve(__dirname, '..');
const PAPERS_DIR = path.join(ROOT, 'assets', 'papers');
const OUT = path.join(PAPERS_DIR, 'manifest.json');

const files = scanPapersDir(PAPERS_DIR);
fs.writeFileSync(OUT, JSON.stringify({ updated: Date.now(), files }, null, 2), 'utf8');
console.log('扫描到 ' + files.length + ' 个 PDF，已写入 ' + OUT);
