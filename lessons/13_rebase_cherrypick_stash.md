# 第13课：Rebase、Cherry-pick、Stash
目标：掌握三种常用进阶操作的概念与安全用法。

1. Rebase（整理提交历史）
   - 用途：把你的分支基于最新 main，或在合并前压缩整理提交
   - 示例：
     - 更新基础：git checkout feature/xxx
     - git fetch
     - git rebase origin/main
   - 交互式压缩（在提交前清理历史）：
     - git rebase -i HEAD~5
     - 按指引将多个小提交 squash 进一个

2. Cherry-pick（挑拣某次提交）
   - 用途：把一个修复移植到其他分支
   - 示例：
     - git checkout main
     - git cherry-pick <提交ID>

3. Stash（暂存未完成改动）
   - 用途：临时保存工作区，切换分支或拉取更新
   - 示例：
     - 保存：git stash push -m "临时保存输入模块重构"
     - 查看：git stash list
     - 恢复：git stash pop

4. 注意事项
   - Rebase 会改历史，避免在已共享的分支上使用
   - Cherry-pick 可能引入冲突，按第6课方法解决
   - Stash 不会保存未跟踪文件，必要时先 git add
