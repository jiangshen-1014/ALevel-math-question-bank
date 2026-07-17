#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
版本备份工具 —— 修改关键文件前先备份「上个版本」，方便回滚。

为什么需要：
  题库 data.js / app.js 是项目核心数据，曾发生"改动后无法回滚"的事故。
  此工具让每次修改前都能保留一个带时间戳的历史版本。

用法（在题库软件项目根目录执行）：
  python .workbuddy/tools/backup.py backup  assets/js/data.js
      -> 把当前 data.js 复制为 .workbuddy/backups/data.js/<时间戳>__data.js

  python .workbuddy/tools/backup.py list    assets/js/data.js
      -> 列出该文件所有历史备份（新→旧）

  python .workbuddy/tools/backup.py restore assets/js/data.js <时间戳>
      -> 回滚到指定备份（回滚前会自动备份「当前版本」，防反悔）

  python .workbuddy/tools/backup.py diff    assets/js/data.js <时间戳>
      -> 显示「当前文件」与「某备份」的差异

说明：
  - 备份按「文件名」分目录存放于 .workbuddy/backups/<basename>/，互不干扰。
  - 每个文件最多保留 30 个历史版本（超出自动清理最旧的）。
  - 时间戳格式 %Y%m%d_%H%M%S（如 20260715_230500）。
"""
import sys, os, shutil, subprocess

# 脚本位于 <根>/.workbuddy/tools/backup.py
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BACKUP_ROOT = os.path.join(ROOT, ".workbuddy", "backups")
KEEP = 30


def _ts():
    import datetime
    return datetime.datetime.now().strftime("%Y%m%d_%H%M%S")


def _backup_dir(fpath):
    return os.path.join(BACKUP_ROOT, os.path.basename(fpath))


def _resolve(fpath):
    if not os.path.isabs(fpath):
        fpath = os.path.join(ROOT, fpath)
    return os.path.abspath(fpath)


def do_backup(fpath):
    fpath = _resolve(fpath)
    if not os.path.isfile(fpath):
        print("ERROR: 文件不存在 ->", fpath)
        sys.exit(1)
    d = _backup_dir(fpath)
    os.makedirs(d, exist_ok=True)
    stamp = _ts()
    dest = os.path.join(d, stamp + "__" + os.path.basename(fpath))
    shutil.copy2(fpath, dest)
    print("✓ 已备份:", dest)
    # 清理旧版本，保留最近 KEEP 个
    vers = sorted(os.listdir(d))
    if len(vers) > KEEP:
        for old in vers[:-KEEP]:
            os.remove(os.path.join(d, old))
        print("  (已清理最旧备份，保留最近 %d 个)" % KEEP)


def do_list(fpath):
    d = _backup_dir(_resolve(fpath))
    if not os.path.isdir(d) or not os.listdir(d):
        print("无备份:", os.path.basename(fpath))
        return
    print("备份列表 %s（新→旧）:" % os.path.basename(fpath))
    for v in sorted(os.listdir(d), reverse=True):
        p = os.path.join(d, v)
        print("  %s   %8d bytes" % (v, os.path.getsize(p)))


def do_restore(fpath, stamp):
    fpath = _resolve(fpath)
    d = _backup_dir(fpath)
    target = os.path.join(d, stamp + "__" + os.path.basename(fpath))
    if not os.path.isfile(target):
        print("ERROR: 找不到该备份 ->", target)
        sys.exit(1)
    # 回滚前先备份「当前版本」，防止回滚后想反悔
    do_backup(fpath)
    shutil.copy2(target, fpath)
    print("✓ 已回滚 %s <- %s" % (os.path.basename(fpath), stamp))


def do_diff(fpath, stamp):
    fpath = _resolve(fpath)
    d = _backup_dir(fpath)
    target = os.path.join(d, stamp + "__" + os.path.basename(fpath))
    if not os.path.isfile(target):
        print("ERROR: 找不到该备份 ->", target)
        sys.exit(1)
    r = subprocess.run(
        ["git", "--no-pager", "diff", "--no-index", "--color=never", target, fpath],
        cwd=ROOT, capture_output=True, text=True
    )
    out = r.stdout or r.stderr
    if out.strip():
        print(out)
    else:
        print("（当前文件与该备份无差异）")


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    cmd, fpath = sys.argv[1], sys.argv[2]
    if cmd == "backup":
        do_backup(fpath)
    elif cmd == "list":
        do_list(fpath)
    elif cmd == "restore":
        if len(sys.argv) < 4:
            print("用法: backup.py restore <file> <时间戳>"); sys.exit(1)
        do_restore(fpath, sys.argv[3])
    elif cmd == "diff":
        if len(sys.argv) < 4:
            print("用法: backup.py diff <file> <时间戳>"); sys.exit(1)
        do_diff(fpath, sys.argv[3])
    else:
        print(__doc__)


if __name__ == "__main__":
    main()
