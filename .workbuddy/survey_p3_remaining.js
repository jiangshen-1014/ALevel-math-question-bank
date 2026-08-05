const fs = require("fs");
const vm = require("vm");
const src = fs.readFileSync("assets/js/data.js", "utf8");
const start = src.indexOf("const SEED_QUESTIONS = [");
const end = src.indexOf("];", start);
const arrSrc = src.slice(start, end + 2);
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(arrSrc + "\nglobalThis.__SEED = SEED_QUESTIONS;", sandbox);
const SEED = sandbox.__SEED;
const groups = {};
let totalEmpty = 0, totalP3 = 0;
for (const q of SEED) {
  if (!q || !q.id || !/^cie_p3_/.test(q.id)) continue;
  totalP3++;
  const m = q.id.match(/^cie_p3_(\d{2}[A-Z]{2}\d{2})_q/);
  if (!m) continue;
  const code = m[1];
  if (!groups[code]) groups[code] = { total: 0, empty: 0 };
  groups[code].total++;
  if (!q.solution || q.solution.length === 0) { groups[code].empty++; totalEmpty++; }
}
const codes = Object.keys(groups).sort();
console.log("Total P3 questions:", totalP3, "| Total empty:", totalEmpty);
console.log("code | total | empty");
for (const c of codes) {
  const g = groups[c];
  if (g.empty > 0) console.log(c, g.total, g.empty);
}
