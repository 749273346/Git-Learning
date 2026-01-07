# 第18课：GitHub Actions CI 入门（轻量验证）
目标：在每次推送或 PR 时自动做基础检查，确保示例结构正常。

1. 创建工作流文件（可在本地新建 .github/workflows/ci.yml）
   - 内容示例（轻量验证 index.html 是否存在）：
     name: CI
     on:
       push:
       pull_request:
     jobs:
       verify:
         runs-on: ubuntu-latest
         steps:
           - name: Checkout
             uses: actions/checkout@v4
           - name: Verify tetris files exist
             run: |
               test -f "俄罗斯方块/index.html"
               test -f "俄罗斯方块/src/main.js"
               echo "Files OK"

2. 提交并推送
   - git add .github/workflows/ci.yml
   - git commit -m "ci: 添加轻量结构验证工作流"
   - git push

3. 查看结果
   - GitHub 仓库  Actions  查看每次运行状态与日志
