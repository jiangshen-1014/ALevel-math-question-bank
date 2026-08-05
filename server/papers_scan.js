'use strict';
/*
 * papers_scan.js —— 递归扫描 assets/papers/ 下的真题卷 / 官方 MS（PDF）。
 *
 * 目录约定（4 层文件夹 + 文件名）：
 *   assets/papers/{考试局 board}/{科目 subject}/{年份 year}/{考季 season}/{文件名}.pdf
 *     board : CIE | Edexcel（大小写不限，原样返回）
 *     subject: 如 S1 / P3 / P1 / M1 / FP1 …
 *     year : 如 2025 / 25
 *     season: MJ (May/June) | FM (Feb/March) | ON (Oct/Nov)
 *   文件名若含 ms / mark scheme / markscheme / 评分 / 答案 → 判定为官方 MS，否则为原卷。
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
    out.push({
      id: 'folder:' + rel,
      source: 'folder',
      board: segs[0] || '',
      subject: segs[1] || '',
      year: segs[2] || '',
      season: segs[3] || '',
      type: classify(name),
      name: name,
      rel: String(rel),
      path: '/assets/papers/' + String(rel).split(path.sep).join('/'),
      size: st.size
    });
  }
  return out;
}

module.exports = { scanPapersDir, classify };
