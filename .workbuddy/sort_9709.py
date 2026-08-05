import os, re, shutil

ROOT = "assets/papers/CIE/9709"
PUB  = "public/assets/papers/CIE/9709"
SESMAP = {'m': 'Feb-Mar', 's': 'May-Jun', 'w': 'Oct-Nov'}
# 文件名：9709_{字母}{yy}_{rest}.pdf
#   rest = qp_NN  -> season/qp/
#   rest = ms_NN  -> season/ms/
#   rest = er     -> 年份目录直接放（Exam report）
#   rest = gt     -> 年份目录直接放（Grade threshold）
pat = re.compile(r'^9709_([msw])(\d{2})_(.+)\.pdf$', re.I)


def plan(dry=True):
    moved = 0
    skipped = 0
    errors = []
    for fn in sorted(os.listdir(ROOT)):
        full = os.path.join(ROOT, fn)
        if not os.path.isfile(full) or not fn.lower().endswith('.pdf'):
            continue
        m = pat.match(fn)
        if not m:
            errors.append("不匹配命名，跳过: " + fn)
            skipped += 1
            continue
        letter, yy, rest = m.groups()
        season = SESMAP.get(letter.lower())
        year = '20' + yy
        if rest.lower().startswith('qp'):
            tgt = os.path.join(ROOT, year, season, 'qp', fn)
        elif rest.lower().startswith('ms'):
            tgt = os.path.join(ROOT, year, season, 'ms', fn)
        elif rest.lower() == 'er':
            tgt = os.path.join(ROOT, year, fn)          # 直接放年份目录
        elif rest.lower() == 'gt':
            tgt = os.path.join(ROOT, year, fn)          # 直接放年份目录
        else:
            errors.append("未知类型后缀，跳过: " + fn)
            skipped += 1
            continue
        if os.path.exists(tgt):
            errors.append("目标已存在，跳过: " + fn)
            skipped += 1
            continue
        if dry:
            rel = os.path.relpath(tgt, ROOT).replace(os.sep, '/')
            print(f"{fn}  ->  {rel}")
        else:
            os.makedirs(os.path.dirname(tgt), exist_ok=True)
            shutil.move(full, tgt)
            ptgt = os.path.join(PUB, os.path.relpath(tgt, ROOT))
            if not os.path.exists(ptgt):
                os.makedirs(os.path.dirname(ptgt), exist_ok=True)
                shutil.copy2(tgt, ptgt)
        moved += 1
    return moved, skipped, errors


if __name__ == '__main__':
    import sys
    dry = '--apply' not in sys.argv
    mv, sk, err = plan(dry=dry)
    print(f"\n{'[DRY RUN]' if dry else '[APPLY]'} 移动 {mv} 个, 跳过 {sk} 个")
    for e in err:
        print("  !", e)
