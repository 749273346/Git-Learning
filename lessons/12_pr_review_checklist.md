# 第12课：Pull Request 与评审清单
目标：创建 PR，使用评审清单保证质量与可读性。

1. 创建功能分支并推送
   - git checkout -b feature/refactor-board
   - 完成功能后：
     - git add .
     - git commit -m "refactor: 重构 Board 绘制逻辑"
     - git push -u origin feature/refactor-board

2. 在 GitHub 创建 PR
   - 选择分支与目标 main，填写描述与变更摘要

3. 评审清单（提交者自检 + 评审者参考）
   - 说明为什么改：问题背景与目标
   - 概述改了什么：核心点、影响范围
   - 截图或演示：关键 UI 或行为变更
   - 提交信息简洁一致：feat/fix/refactor/style/chore
   - 是否可回滚：小步提交，避免巨型 PR
   - 运行本地测试/自查：
     - 本地打开 俄罗斯方块/index.html 验证
   - 文档更新：如必要更新 lessons 或 cheatsheets
   - 依赖是否变更，是否影响发布流程

4. 合并策略（GitHub Flow）
   - 通过评审  Merge  删除临时分支  推送 main
