# 第11课：发布到 GitHub Pages（用 subtree 保持目录分离）
目标：将 俄罗斯方块 目录发布为网页，保持课程与示例分离。

1. 前提
   - 已有远程仓库并推送 main
   - 本地示例在 俄罗斯方块/ 目录

2. 使用 subtree 发布到 gh-pages 分支（推荐）
   - 从示例目录生成临时分支：
     - git subtree split --prefix 俄罗斯方块 -b gh-pages-build
   - 推送到远程 gh-pages：
     - git push origin gh-pages-build:gh-pages
   - 清理临时分支（可选）：
     - git branch -D gh-pages-build

3. 在 GitHub 设置 Pages
   - 仓库 Settings  Pages  Branch 选择 gh-pages
   - 等待构建完成后访问提供的 URL

4. 后续更新
   - 每次 main 更新后再次：
     - git subtree split --prefix 俄罗斯方块 -b gh-pages-build
     - git push origin gh-pages-build:gh-pages
     - git branch -D gh-pages-build

5. 其他方式（了解）
   - 直接用 main/docs：把示例复制到 docs/ 并设置 Pages 来源为 main+docs
   - 但会混合课程与示例，不如 subtree 更干净
