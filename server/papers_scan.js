'use strict';
/*
 * papers_scan.js —— 递归扫描 assets/papers/ 下的真题卷 / 官方 MS（PDF）。
 *
 * 目录约定（5 层文件夹 + 文件名）：
 *   assets/papers/{考试局 board}/{科目 subject}/{年份 year}/{考季 season}/{qp|ms}/{文件名}.pdf
 *     board : CIE | Edexcel（大小写不限，原样返回）
 *     subject: CIE 用 9709 / 9231；Edexcel 用单元代码 P1/S1/M1/FP1…
 *     year : 如 2025 / 25
 *     season: Feb-Mar / May-Jun / Oct-Nov（CIE）或 Jan / Jun / Oct（Edexcel IAL）
 *     qp|ms : qp = 原卷(question paper)，ms = 官方评分方案(mark scheme)
 *   类型判定优先级：qp|ms 子文件夹名 → 文件名（含 ms / mark scheme / 评分 / 答案 → 官方 MS）
 *
 * 返回数组，每项为：
 *   { id, source:'folder', board, subject, year, season,
 *     type:'paper'|'ms', name, rel, path, size }
 *   - path 为可直接在浏览器打开的 URL（/assets/papers/...）
 *   - rel 为相对 assets/papers 的路径（OS 分隔符）
 */
const fs = require('fs');
const path = require('path');

function classify(name) {
  return /ms|mark[\s_-]?scheme|markscheme|评分|答案|解答/i.test(name) ? 'ms' : 'paper';
}

// 文件名里的考季字母 → 可读考季（与本项目约定一致：m→Feb-Mar, s→May-Jun, w→Oct-Nov）
const SEASON_FROM_LETTER = { m: 'Feb-Mar', s: 'May-Jun', w: 'Oct-Nov' };

// 从 qp/ms 子文件夹名推断类型（PDF 位于倒数第二层时）
function typeFromParent(segs) {
  const parent = segs[segs.length - 2] || '';
  if (/^ms$/i.test(parent)) return 'ms';
  if (/^qp$/i.test(parent)) return 'paper';
  return null;
}

function scanPapersDir(rootDir) {
  const out = [];
  if (!rootDir || !fs.existsSync(rootDir)) return out;
  let entries = [];
  try {
    entries = fs.readdirSync(rootDir, { recursive: true });
  } catch (e) {
    return out;
  }
  for (const rel of entries) {
    const full = path.join(rootDir, rel);
    let st;
    try { st = fs.statSync(full); } catch (e) { continue; }
    if (!st.isFile()) continue;
    if (!/\.pdf$/i.test(String(rel))) continue;
    const segs = String(rel).split(path.sep);
    const fileName = segs[segs.length - 1];
    const name = fileName.replace(/\.pdf$/i, '');
    // 兼容三种深度：
    //   …/season/file.pdf（5 段）→ season 取文件夹名
    //   …/season/qp|ms/file.pdf（6 段）→ season 取文件夹名、type 取 qp/ms
    //   …/year/file.pdf（4 段，如 er/gt 直接放年份目录）→ season 从文件名字母推断
    const board = segs[0] || '';
    const subject = segs[1] || '';
    const year = segs[2] || '';
    let season = segs[3] || '';
    let type = typeFromParent(segs);
    if (!type) type = classify(name);
    if (segs.length === 4) {
      const letter = (name.match(/_([msw])\d{2}_/i) || [, ''])[1];
      season = SEASON_FROM_LETTER[(letter || '').toLowerCase()] || '';
      if (/_er$/i.test(name)) type = 'er';
      else if (/_gt$/i.test(name)) type = 'gt';
    }
    out.push({
      id: 'folder:' + rel,
      source: 'folder',
      board, subject, year, season, type,
      name: name,
      rel: String(rel),
      path: '/assets/papers/' + String(rel).split(path.sep).join('/'),
      size: st.size
    });
  }
  return out;
}

module.exports = { scanPapersDir, classify };
