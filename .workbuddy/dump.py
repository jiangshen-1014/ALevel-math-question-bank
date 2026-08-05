# -*- coding: utf-8 -*-
import sys, re
ROOT = "E:/workbuddy/题库软件/assets/js/data.js"
with open(ROOT, encoding="utf-8") as f:
    data = f.read()
prefix = sys.argv[1]
if not prefix.startswith("cie_p3_"):
    prefix = "cie_p3_" + prefix
# split into question objects roughly by "id":
ids = re.findall(r'"id"\s*:\s*"(%s_q\d+)"' % re.escape(prefix), data)
print("found ids:", ids)
for qid in ids:
    i = data.find('"id":"%s"' % qid)
    if i == -1:
        i = data.find('"id": "%s"' % qid)
    # find stem start
    sm = re.search(r'"stem"\s*:\s*"', data[i:i+6000])
    if not sm:
        print("\n==== %s ====\n(no stem)\n" % qid)
        continue
    s = i + sm.end()
    # find stem end: unescaped closing quote followed by , or }
    depth = 0
    j = s
    # naive: read until we see "\n" style... use json-ish: track quotes and backslashes
    # simpler: capture up to "\n  }," pattern is fragile; instead find next '"solution"'
    rest = data[s:s+6000]
    # stem ends at the closing quote of the stem string; find '"\s*,\s*"solution"'
    em = re.search(r'"\s*,\s*"solution"', rest)
    if em:
        stem = rest[:em.start()]
    else:
        stem = rest[:2000]
    stem = stem.replace('\\n', '\n').replace('\\"', '"')
    print("\n==== %s ====\n%s\n" % (qid, stem))
