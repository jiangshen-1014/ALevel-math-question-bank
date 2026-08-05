import os, re, shutil, sys

ROOT = r"E:\workbuddy\题库软件\assets\papers\CIE\9709"
PUB  = r"E:\workbuddy\题库软件\public\assets\papers\CIE\9709"
TRASH = r"E:\workbuddy\题库软件\.workbuddy\_dup_trash"
SESMAP = {'m': 'Feb-Mar', 's': 'May-Jun', 'w': 'Oct-Nov'}

re_er_gt = re.compile(r'^9709_([msw])(\d{2})_(er|gt)\.pdf$', re.I)
re_qp_ms = re.compile(r'^9709_([msw])(\d{2})_(qp|ms)(?:_([^.]+))?\.pdf$', re.I)

def canonical(name):
    return re.sub(r' \(\d+\)\.pdf$', '.pdf', name, flags=re.I)

def parse():
    """返回 list of dict: {fn, kind, dstdir, cn}"""
    items = []
    for fn in sorted(os.listdir(ROOT)):
        full = os.path.join(ROOT, fn)
        if not os.path.isfile(full) or not fn.lower().endswith('.pdf'):
            continue
        m = re_er_gt.match(fn)
        if m:
            letter, yy, typ = m.groups()
            year = '20' + yy
            dstdir = os.path.join(ROOT, year, SESMAP[letter.lower()])
            items.append({'fn': fn, 'dstdir': dstdir, 'cn': canonical(fn), 'typ': typ})
            continue
        m = re_qp_ms.match(fn)
        if m:
            letter, yy, typ, unit = m.groups()
            year = '20' + yy
            dstdir = os.path.join(ROOT, year, SESMAP[letter.lower()], typ.lower())
            items.append({'fn': fn, 'dstdir': dstdir, 'cn': canonical(fn), 'typ': typ})
            continue
        items.append({'fn': fn, 'dstdir': None, 'cn': None, 'typ': None})  # unknown
    return items

def main():
    apply = '--apply' in sys.argv
    items = parse()
    canon_set = {it['cn'] for it in items if it['cn']}
    n_move = n_del_batch = n_del_exist = n_unknown = 0
    for it in items:
        fn = it['fn']
        if it['dstdir'] is None:
            n_unknown += 1
            print(f"  ?? 未识别: {fn}")
            continue
        cn = it['cn']
        src = os.path.join(ROOT, fn)
        if fn != cn and cn in canon_set:
            # 带序号的重复副本，规范版也在本次列表 → 移出 papers 暂存（不删除，可恢复）
            if apply:
                os.makedirs(TRASH, exist_ok=True)
                shutil.move(src, os.path.join(TRASH, fn))
            n_del_batch += 1
            print(f"  TRASH(批次重复) {fn}  (规范版 {cn} 将搬家)")
            continue
        dst = os.path.join(it['dstdir'], cn)
        if os.path.exists(dst):
            if apply:
                os.makedirs(TRASH, exist_ok=True)
                shutil.move(src, os.path.join(TRASH, fn))
            n_del_exist += 1
            print(f"  TRASH(已归类重复) {fn}")
            continue
        if apply:
            os.makedirs(it['dstdir'], exist_ok=True)
            shutil.move(src, dst)
            pdst = os.path.join(PUB, os.path.relpath(dst, ROOT))
            if not os.path.exists(pdst):
                os.makedirs(os.path.dirname(pdst), exist_ok=True)
                shutil.copy2(dst, pdst)
        n_move += 1
        print(f"  MOVE {fn}  ->  {os.path.relpath(dst, ROOT)}")
    print(f"\n计划/执行: 移动 {n_move} 个, 删除批次重复 {n_del_batch} 个, 删除已归类重复 {n_del_exist} 个, 未识别 {n_unknown} 个")

if __name__ == '__main__':
    main()
