import re

s = open('assets/js/data.js', encoding='utf-8').read()
ids = list(re.finditer(r'(?:id|"id")\s*:\s*"(cie_p3_[^"]+)"', s))
print('TOTAL cie_p3 entries:', len(ids))

def block_text(i):
    start = ids[i].start()
    end = ids[i+1].start() if i+1 < len(ids) else len(s)
    return s[start:end]

# keyword signals (lowercased latex-friendly)
implicit_kw = ['implicit', 'implicitly']
parametric_kw = ['parametric']
maxmin_kw = ['maximum', 'minimum', 'stationary point', 'greatest value',
             'least value', 'turning point', 'largest value', 'smallest value',
             'maximise', 'maximize', 'minimise', 'minimize']

hits = []
for i in range(len(ids)):
    qid = ids[i].group(1)
    blk = block_text(i)
    cm = re.search(r'(?:chapter|"chapter")\s*:\s*\[([^\]]*)\]', blk)
    cur = (cm.group(1).strip().replace('\n', ' ')) if cm else '??'
    low = blk.lower()
    found = []
    if any(k in low for k in implicit_kw):
        found.append('implicit')
    if any(k in low for k in parametric_kw):
        found.append('parametric')
    if any(k in low for k in maxmin_kw):
        found.append('maxmin')
    if found:
        hits.append((qid, cur, found))

print('=== candidates:', len(hits), '===')
for qid, cur, found in hits:
    print(f'{qid:28s} | cur: {cur:55s} | {found}')
