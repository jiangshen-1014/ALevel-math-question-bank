const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('E:/workbuddy/题库软件/assets/js/data.js', 'utf8');
const ctx = { localStorage: { getItem:()=>null, setItem:()=>{}, removeItem:()=>{} }, console };
const script = new vm.Script(code);
script.runInNewContext(ctx);

const qs = ctx.SEED_QUESTIONS;
console.log('Total questions:', qs.length);

const noId = qs.filter(q => !q.id);
if (noId.length) console.error('MISSING id:', noId.length); else console.log('OK All have id');

const ids = qs.map(q => q.id);
const dupes = ids.filter((v,i,a)=>a.indexOf(v)!==i);
if (dupes.length) console.error('DUPLICATE ids:', [...new Set(dupes)]); else console.log('OK All ids unique');

const fp2 = qs.filter(q=>q.subject==='FP2');
const noLabel = fp2.filter(q => !q.examRef || !q.examRef.label);
if (noLabel.length) console.error('FP2 without label:', noLabel.map(q=>q.id)); else console.log('OK All FP2 have examRef.label');

const newQs = qs.filter(q => q.id && q.id.includes('25June01A'));
console.log('\nNew 25June01A entries:', newQs.length);
for (const q of newQs) {
    const missing = ['id','board','subject','chapter','source','stem','figure','solution','examRef','createdAt'].filter(k=>!(k in q));
    if (missing.length) console.error('  MISSING', q.id, missing.join(','));
    else console.log('  OK', q.id, '| chapter:', q.chapter.join(','), '| marks:', q.marks, '| fig:', q.figure||'(none)');
}
