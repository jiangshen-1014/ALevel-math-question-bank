'use strict';
/*
 * server.js —— 题库本地服务（零依赖，仅用 Node 内置模块）。
 *
 * 作用：让网页版的「编辑 / 新增 / 删除 / 导入」直接持久化到本地 JSON 文件
 *       （项目内的 data/store.json），而不是只存在浏览器的 IndexedDB 里。
 *
 * 用法：
 *   node server/server.js        # 默认端口 8787
 *   PORT=9000 node server/server.js
 * 然后浏览器打开 http://localhost:8787 即可。
 *
 * 持久化模型（与前端 Store 一致）：
 *   data/store.json = { overrides: [完整题对象...], deleted: [被删 id...] }
 *   前端用「种子(assets/js/data.js 的 SEED_QUESTIONS) + overrides - deleted」合并出完整题库。
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const ROOT = path.resolve(__dirname, '..');            // 项目根目录
const DATA_DIR = path.join(ROOT, 'data');
const STORE_FILE = path.join(DATA_DIR, 'store.json');
const PAPERS_DIR = path.join(ROOT, 'assets', 'papers'); // 资料库：真题卷/官方 MS 文件夹
const PORT = process.env.PORT || 8787;

const { scanPapersDir } = require('./papers_scan.js');

/* ---------- 本地文件持久化（覆盖记录 + 删除标记） ---------- */
function loadStore() {
  try {
    const obj = JSON.parse(fs.readFileSync(STORE_FILE, 'utf8'));
    if (!Array.isArray(obj.overrides)) obj.overrides = [];
    if (!Array.isArray(obj.deleted)) obj.deleted = [];
    return obj;
  } catch (e) {
    return { overrides: [], deleted: [] };
  }
}
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(STORE_FILE)) {
  fs.writeFileSync(STORE_FILE, JSON.stringify({ overrides: [], deleted: [] }, null, 2), 'utf8');
}
let store = loadStore();
let _saving = Promise.resolve();
function persist() {
  _saving = _saving.then(() => new Promise((resolve) => {
    const tmp = STORE_FILE + '.tmp';
    fs.writeFile(tmp, JSON.stringify(store, null, 2), 'utf8', (err) => {
      if (err) { console.error('写入 store.json 失败：', err.message); return resolve(); }
      fs.rename(tmp, STORE_FILE, () => resolve());
    });
  }));
  return _saving;
}

/* ---------- 请求体解析 ---------- */
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => { data += c; if (data.length > 20 * 1024 * 1024) req.destroy(); });
    req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(e); } });
    req.on('error', reject);
  });
}

/* ---------- 静态文件服务 ---------- */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};
function sendFile(res, filePath) {
  fs.readFile(filePath, (err, buf) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(buf);
  });
}

/* ---------- 路由 ---------- */
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost');
  const p = u.pathname;
  const setJson = () => res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  try {
    // 读取当前覆盖/删除状态
    if (p === '/api/state' && req.method === 'GET') {
      setJson(); res.end(JSON.stringify(store)); return;
    }
    // 单题 upsert（编辑 / 新增）
    if (p === '/api/override' && req.method === 'POST') {
      const q = await readBody(req);
      if (!q || !q.id) { res.writeHead(400); res.end(JSON.stringify({ ok: false, msg: '缺少 id' })); return; }
      const i = store.overrides.findIndex((x) => x.id === q.id);
      if (i >= 0) store.overrides[i] = q; else store.overrides.push(q);
      store.deleted = store.deleted.filter((id) => id !== q.id);
      await persist();
      setJson(); res.end(JSON.stringify({ ok: true })); return;
    }
    // 单题删除
    if (p === '/api/delete' && req.method === 'POST') {
      const b = await readBody(req);
      if (b && b.id) {
        if (!store.deleted.includes(b.id)) store.deleted.push(b.id);
        store.overrides = store.overrides.filter((x) => x.id !== b.id);
        await persist();
      }
      setJson(); res.end(JSON.stringify({ ok: true })); return;
    }
    // 批量替换（导入 JSON 时）
    if (p === '/api/replaceAll' && req.method === 'POST') {
      const b = await readBody(req);
      if (b && Array.isArray(b.overrides)) store.overrides = b.overrides;
      if (b && Array.isArray(b.deleted)) store.deleted = b.deleted;
      await persist();
      setJson(); res.end(JSON.stringify({ ok: true })); return;
    }
    // 资料库：扫描 assets/papers 下的真题卷 / 官方 MS
    if (p === '/api/papers' && req.method === 'GET') {
      setJson();
      res.end(JSON.stringify(scanPapersDir(PAPERS_DIR)));
      return;
    }
    // 静态文件
    let rel = decodeURIComponent(p);
    if (rel === '/') rel = '/index.html';
    const filePath = path.normalize(path.join(ROOT, rel));
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('forbidden'); return; }
    sendFile(res, filePath);
  } catch (e) {
    res.writeHead(500); res.end('Server error: ' + e.message);
  }
});

server.listen(PORT, () => {
  console.log('题库本地服务已启动 ✅');
  console.log('  浏览器打开： http://localhost:' + PORT);
  console.log('  编辑将保存到： ' + STORE_FILE);
});
