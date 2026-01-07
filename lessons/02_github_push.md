# 第2课：连接 GitHub 并推送（含后续变更）
目标：创建远程仓库并推送 main 分支；之后每次本地提交都推送到远程。

1. 在 GitHub 创建新仓库，复制远程地址（HTTPS 或 SSH）
2. 添加远程：
   - git remote add origin 你的远程地址
3. 统一分支名：
   - git branch -M main
4. 首次推送：
   - git push -u origin main
5. 后续变更（例如移动到 俄罗斯方块 或开发新功能）：
   - git add .
   - git commit -m "chore/feat: 描述本次变更"
   - git push
6. 在 GitHub 打开仓库，确认文件与提交已同步
