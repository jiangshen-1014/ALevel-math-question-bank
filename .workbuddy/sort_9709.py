import os, re, shutil

ROOT = "assets/papers/CIE/9709"
PUB  = "public/assets/papers/CIE/9709"
SESMAP = {'m': 'Feb-Mar', 's': 'May-Jun', 'w': 'Oct-Nov'}
pat = re.compile(r'^9709_([msw])(\d{2})_(qp|ms)_(\d+)\.pdf$', re.I)


def classify_and_move(dry=True):
    moved = 0
    skipped = 0
    errors = []
    for fn in sorted(os.listdir(ROOT)):
        full = os.path.join(ROOT, fn)
        if not os.path.isfile(full):
            continue
        if not fn.lower().endswith('.pdf'):
            continue
        m = pat.match(fn)
        if not m:
            errors.append("不匹配命名，跳过: " + fn)
            skipped += 1
            continue
        letter, yy, typ, unit = m.groups()
        season = SESMAP.get(letter.lower())
        year = '20' + yy
        tgt = os.path.join(ROOT, year, season, typ, fn)
        if os.path.exists(tgt):
            errors.append("目标已存在，跳过: " + fn)
            skipped += 1
            continue
        if dry:
            print(f"{fn}  ->  {year}/{season}/{typ}/")
        else:
            os.makedirs(os.path.dirname(tgt), exist_ok=True)
            shutil.move(full, tgt)
            # 同步镜像到 public 副本（public 根目录当前无这些散落文件）
            ptgt = os.path.join(PUB, year, season, typ, fn)
            if not os.path.exists(ptgt):
                os.makedirs(os.path.dirname(ptgt), exist_ok=True)
                shutil.copy2(tgt, ptgt)
        moved += 1
    return moved, skipped, errors


print("=== DRY RUN (assets + mirror public) ===")
mv, sk, err = classify_and_move(dry=True)
print(f"\n计划移动: {mv} 个, 跳过: {sk} 个")
for e in err:
    print("  !", e)
