// Usage: node .workbuddy/_status.js <PREFIX...>
const fs = require('fs');
const vm = require('vm');
const txt = fs.readFileSync('assets/js/data.js', 'utf8');
const s = txt.indexOf('const SEED_QUESTIONS = [');
const e = txt.indexOf('];', s);
const code = txt.slice(s, e + 2);
const sb = {};
vm.runInNewContext(code + '\n;this.SEED_QUESTIONS = SEED_QUESTIONS;', sb);
const SEED = sb.SEED_QUESTIONS;
const holes = [];
for (let i = 0; i < SEED.length; i++) {
  if (SEED[i] == null || typeof SEED[i] !== 'object') holes.push(i);
}
console.log('SEED length:', SEED.length, '| holes:', holes.length);
const markers = ['\\ln','\\cos','\\sin','\\tan','\\mathrm','\\Rightarrow','\\boxed','\\frac','\\int','\\arg','\\overrightarrow','\\begin','\\sum','\\pi','\\alpha','\\sqrt','\\times','\\approx','\\theta','\\left','\\right'];
const prefixes = process.argv.slice(2);
for (const p of prefixes) {
  const qs = SEED.filter(q => q.id && q.id.includes(p));
  let empty = 0, noltx = 0;
  qs.forEach(q => {
    const sol = q.solution || '';
    if (sol.length === 0) { empty++; console.log('  EMPTY:', q.id); return; }
    const hasDelim = sol.indexOf('$') >= 0 || sol.indexOf('\\(') >= 0;
    const hasCmd = markers.some(m => sol.indexOf(m) >= 0);
    if (!(hasDelim && hasCmd)) { noltx++; console.log('  NO_LATEX:', q.id); }
  });
  console.log(`prefix ${p}: ${qs.length} questions, ${empty} empty, ${noltx} (no LaTeX marker)`);
}
