import re

s = open('assets/js/data.js', encoding='utf-8').read()
ids = list(re.finditer(r'(?:id|"id")\s*:\s*"(cie_p3_[^"]+)"', s))

def block_text(i):
    start = ids[i].start()
    end = ids[i+1].start() if i+1 < len(ids) else len(s)
    return s[start:end]

# broader calculus vocabulary to catch all differentiation-related questions
calc_tokens = ['differentiat', r'\\frac\{\\mathrm\{d\}\}y\{\\mathrm\{d\}\}x\}',
               r'\\dfrac\{\\mathrm\{d\}\}y\{\\mathrm\{d\}\}x\}', r'\\frac\{\\mathrm\{d\}\}\{\\mathrm\{d\}\}x\}',
               'stationary', 'gradient', 'tangent', 'normal to', 'maximum', 'minimum',
               'implicit', 'parametric', 'rate of change', 'connected rate',
               r'\\mathrm\{d\}y', r'\\frac\{\\mathrm\{d\}']

def clean(t):
    t = t.replace('\\n', ' ').replace('\n', ' ')
    return re.sub(r'\s+', ' ', t)

selected = []
for i in range(len(ids)):
    qid = ids[i].group(1)
    blk = block_text(i)
    low = blk.lower()
    if any(re.search(tok, blk, re.I) for tok in calc_tokens):
        cm = re.search(r'(?:chapter|"chapter")\s*:\s*\[([^\]]*)\]', blk)
        cur = (cm.group(1).strip().replace('\n', ' ')) if cm else '??'
        # stem snippet
        sm = re.search(r'(?:stem|"stem")\s*:\s*"((?:[^"\\]|\\.)*)"', blk)
        stem = clean(sm.group(1)) if sm else '(no stem)'
        selected.append((qid, cur, stem[:360]))

print('=== calculus-related cie_p3:', len(selected), '===')
for qid, cur, stem in selected:
    print('\n##', qid, '| cur:', cur)
    print('   ', stem)
