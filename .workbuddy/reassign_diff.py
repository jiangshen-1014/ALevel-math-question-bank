import re

PATH = 'assets/js/data.js'
s = open(PATH, encoding='utf-8').read()

# ---------- 1. Add "Differentiation" to CIE|P3 preset ----------
anchor = '    "Algebra (partial fractions and binomial expansions)",\n    "Logarithmic and exponential functions",'
assert anchor in s, "CIE|P3 preset anchor not found!"
if '"Differentiation"' in s.split('"CIE|P3":')[1].split('],')[0]:
    print('Differentiation already in CIE|P3 preset (skip add)')
else:
    s = s.replace(anchor,
                  '    "Algebra (partial fractions and binomial expansions)",\n    "Differentiation",\n    "Logarithmic and exponential functions",', 1)
    print('Added "Differentiation" to CIE|P3 preset')

# ---------- 2. Reassignment map (short id -> new chapter list) ----------
reassign = {
    # implicit differentiation -> Differentiation
    '25ON32_q7': ['Differentiation'],
    '25FM32_q2': ['Differentiation'],
    '24ON31_q3': ['Differentiation'],
    '24FM32_q6': ['Differentiation'],
    '22MJ31_q8': ['Differentiation'],
    '25ON35_q4': ['Differentiation'],
    # parametric differentiation -> Differentiation
    '25ON31_q5': ['Differentiation'],
    '25MJ31_q4': ['Differentiation'],
    '25MJ35_q6': ['Differentiation'],
    '24ON32_q8': ['Differentiation'],
    # max/min (pure differentiation) -> Differentiation
    '25ON31_q4': ['Differentiation'],
    '25MJ35_q4': ['Differentiation'],
    '25ON35_q6': ['Differentiation'],
    # max/min then volume/area -> Differentiation + Integration
    '25ON33_q10': ['Differentiation', 'Integration'],
    '25MJ31_q11': ['Differentiation', 'Integration'],
    '24ON31_q6':  ['Differentiation', 'Integration'],
    '24ON32_q11': ['Differentiation', 'Integration'],
    # stationary point found via iteration -> Differentiation + Numerical
    '25ON33_q8':  ['Differentiation', 'Numerical solution of equations'],
    '25FM32_q7':  ['Differentiation', 'Numerical solution of equations'],
    '22MJ31_q10': ['Differentiation', 'Numerical solution of equations'],
    '24FM32_q7':  ['Differentiation', 'Numerical solution of equations'],
}

def fmt(chapters):
    return '"' + '", "'.join(chapters) + '"'

for short, chapters in reassign.items():
    qid = 'cie_p3_' + short
    pattern = re.compile(
        r'((?:id|"id")\s*:\s*"' + re.escape(qid) + r'".*?)'
        r'((?:chapter|"chapter")\s*:\s*\[)[^\]]*(\])', re.S)
    new = pattern.sub(lambda m: m.group(1) + m.group(2) + fmt(chapters) + m.group(3), s, count=1)
    if new == s:
        raise SystemExit(f'!! FAILED to locate/replace chapter for {qid}')
    s = new
    print(f'reassigned {qid} -> {chapters}')

# ---------- 3. Self-verification: any cie_p3 with calc token NOT reassigned? ----------
ids = list(re.finditer(r'(?:id|"id")\s*:\s*"(cie_p3_[^"]+)"', s))
calc = re.compile(r'differentiat|\\frac\{\\mathrm\{d\}\}y\{\\mathrm\{d\}\}x\}|gradient|stationary|implicit|parametric|maximum|minimum|\\mathrm\{d\}y', re.I)
missed = []
for i in range(len(ids)):
    qid = ids[i].group(1)
    short = qid.split('cie_p3_')[1]
    if short in reassign:
        continue
    blk = s[ids[i].start(): (ids[i+1].start() if i+1 < len(ids) else len(s))]
    if calc.search(blk):
        cm = re.search(r'(?:chapter|"chapter")\s*:\s*\[([^\]]*)\]', blk)
        missed.append((short, cm.group(1).strip().replace('\n', ' ') if cm else '?'))
print('\n=== cie_p3 with calc token but NOT reassigned (should be DE/Integration/Complex/etc, NOT differentiation-primary) ===')
for short, cur in missed:
    print(f'  {short:14s} | {cur}')

# ---------- 4. Write back ----------
open(PATH, 'w', encoding='utf-8').write(s)
print('\nWritten. Differentiation count in preset check:',
      '"Differentiation"' in s.split('"CIE|P3":')[1].split('],')[0])
