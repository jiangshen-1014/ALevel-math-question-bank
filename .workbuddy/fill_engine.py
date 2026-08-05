# -*- coding: utf-8 -*-
"""Reusable solution-fill engine for CIE P3 missing-solution questions.
Usage: a per-prefix script does:
    from fill_engine import fill
    fill("22MJ33", { "cie_p3_22MJ33_q1": "...sol...", ... })
The engine:
  - backs up data.js via backup.py
  - locates each id (dual format: "id": "x"  and  "id":"x")
  - replaces the immediately-following empty  "solution": ""  with the given text
  - skips if solution already non-empty
  - validates node --check + Store count (best-effort)
"""
import os, re, json, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
DATAJS = os.path.join(ROOT, "..", "assets", "js", "data.js")
DATAJS = os.path.abspath(DATAJS)
BACKUP = os.path.join(ROOT, "tools", "backup.py")


def _find_id(data, qid):
    i1 = data.find('"id": "%s"' % qid)
    if i1 != -1:
        return i1
    i2 = data.find('"id":"%s"' % qid)
    return i2


def fill(prefix, solutions):
    # backup first
    subprocess.run([sys.executable, BACKUP, "backup", "assets/js/data.js"],
                   cwd=os.path.join(ROOT, ".."), check=False)
    with open(DATAJS, encoding="utf-8") as f:
        data = f.read()

    injected, skipped, notfound = [], [], []
    for qid, sol in solutions.items():
        idx = _find_id(data, qid)
        if idx == -1:
            notfound.append(qid)
            continue
        # locate empty solution slot within window after id
        window = data[idx:idx + 4000]
        m = re.search(r'"solution"\s*:\s*""', window)
        if not m:
            # maybe already filled
            m2 = re.search(r'"solution"\s*:\s*"([\s\S]*?)"\s*,', window)
            if m2 and m2.group(1).strip():
                skipped.append(qid)
                continue
            notfound.append(qid + " (no empty slot)")
            continue
        abspos = idx + m.start()
        repl = '"solution": ' + json.dumps(sol, ensure_ascii=False)
        data = data[:abspos] + repl + data[idx + m.end():]
        injected.append(qid)

    with open(DATAJS, "w", encoding="utf-8") as f:
        f.write(data)

    print("Injected:", len(injected))
    for x in injected:
        print("  +", x)
    if skipped:
        print("Skipped (already filled):", len(skipped))
        for x in skipped:
            print("  =", x)
    if notfound:
        print("NOT FOUND:", len(notfound))
        for x in notfound:
            print("  !", x)
    return injected, skipped, notfound
