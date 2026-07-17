'use strict';
/*
 * db.js —— 轻量文件持久化（JSON）。
 * 适合几百~几千题的小团队共享场景，零原生依赖、易部署。
 * 并发写入通过串行化 save 保证安全；如需更大规模可平滑替换为 SQLite/Postgres。
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

let _cache = { users: [], questions: [] };
let _saving = Promise.resolve();

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(_cache, null, 2), 'utf8');
  }
}

function load() {
  ensure();
  try {
    _cache = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (!_cache.users) _cache.users = [];
    if (!_cache.questions) _cache.questions = [];
  } catch (e) {
    console.error('读取数据库失败，使用空库：', e.message);
    _cache = { users: [], questions: [] };
  }
  return _cache;
}

// 串行化写盘，避免并发覆盖
function persist() {
  _saving = _saving.then(() => new Promise((resolve) => {
    const tmp = DB_FILE + '.tmp';
    fs.writeFile(tmp, JSON.stringify(_cache, null, 2), 'utf8', (err) => {
      if (err) { console.error('写入失败', err); return resolve(); }
      fs.rename(tmp, DB_FILE, () => resolve());
    });
  }));
  return _saving;
}

function getUsers() { return _cache.users; }
function findUserByUsername(name) {
  return _cache.users.find(u => u.username === name) || null;
}
function findUserById(id) {
  return _cache.users.find(u => u.id === id) || null;
}
function addUser(user) {
  _cache.users.push(user);
  return persist();
}
function setUserRole(id, role) {
  const u = findUserById(id);
  if (u) { u.role = role; return persist().then(() => u); }
  return Promise.resolve(null);
}

function getQuestions() { return _cache.questions; }
function getQuestion(id) {
  return _cache.questions.find(q => q.id === id) || null;
}
function upsertQuestion(q) {
  const i = _cache.questions.findIndex(x => x.id === q.id);
  if (i >= 0) _cache.questions[i] = q;
  else _cache.questions.push(q);
  return persist().then(() => q);
}
function deleteQuestion(id) {
  const before = _cache.questions.length;
  _cache.questions = _cache.questions.filter(q => q.id !== id);
  const changed = before !== _cache.questions.length;
  if (changed) return persist().then(() => true);
  return Promise.resolve(false);
}
function replaceAllQuestions(arr, createdBy) {
  const map = new Map(_cache.questions.map(q => [q.id, q]));
  arr.forEach(q => {
    if (q && q.id) {
      const rec = Object.assign({}, q);
      if (createdBy && !rec.createdBy) rec.createdBy = createdBy;
      map.set(q.id, rec);
    }
  });
  _cache.questions = Array.from(map.values());
  return persist().then(() => _cache.questions);
}
function seedQuestions(arr) {
  if (_cache.questions.length > 0) return Promise.resolve(_cache.questions);
  _cache.questions = arr.map(q => Object.assign({}, q));
  return persist().then(() => _cache.questions);
}

module.exports = {
  load, persist,
  getUsers, findUserByUsername, findUserById, addUser, setUserRole,
  getQuestions, getQuestion, upsertQuestion, deleteQuestion,
  replaceAllQuestions, seedQuestions,
  get dbFile() { return DB_FILE; }
};
