# 第16课：Git Bisect 定位回归
目标：用 git bisect 在多次提交中快速定位引入问题的那一次提交。

1. 场景示例
   - 某次修改后靠墙旋转失败，但不确定是哪次提交导致

2. 运行 Bisect
   - 开始：git bisect start
   - 标记坏提交（当前）：git bisect bad
   - 标记一个已知好的历史提交：git bisect good <提交ID或标签>
   - Git 会跳到中间提交，重复判断：
     - 测试：打开 俄罗斯方块/index.html 手动验证旋转
     - 标记结果：git bisect good 或 git bisect bad
   - 当定位到具体提交时会提示 first bad commit

3. 结束并回到原分支
   - git bisect reset

4. 后续处理
   - 创建修复分支，编写修复并提交，引用该问题的 Issue
