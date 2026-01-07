# 第6课：合并冲突与回滚（Reset/Revert）
目标：制造一次冲突、解决它，并学习回滚与还原。

1. 制造冲突
   - 在 main 修改 俄罗斯方块/style.css 按钮背景为 #22c55e 并提交
   - 创建分支并在同一行改为 #f43f5e：
     - git checkout -b feature/style-color
     - 修改并提交
   - 回到 main 合并：
     - git checkout main
     - git merge feature/style-color

2. 解决冲突
   - 打开冲突文件，选择一种颜色或重新设计
   - git add 冲突文件
   - git commit

3. 回滚与还原
   - 还原某个文件到上次提交：git restore 路径
   - 丢弃最近一次提交（危险）：git reset --hard HEAD^
   - 生成反向提交：git revert 提交ID

4. GitLens
   - 在冲突解决后比较合并前后差异，定位变更来源与时间
