# 第10课：工作流与分支策略（GitHub Flow）
目标：建立轻量工作流，确保多人协作顺畅。

1. 基本流程
   - 从 main 创建功能分支：git checkout -b feature/名称
   - 开发并提交，推送到远程：git push -u origin feature/名称
   - 在 GitHub 创建 Pull Request，填写变更说明与截图
   - 代码评审后合并到 main，删除临时分支

2. 提交信息规范
   - feat: 新功能；fix: 修复；refactor: 重构；style: 样式；chore: 杂务

3. 小步提交
   - 每个提交只做一件事，便于回滚与评审

4. 与 GitLens 配合
   - 在编辑器里查看分支与提交差异，辅助评审与定位问题
