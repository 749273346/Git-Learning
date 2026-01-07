# 第1课：Git基础与首次提交（含目录分离）
目标：完成初始化与首次提交，并把示例代码放到 俄罗斯方块 目录。

1. 打开主文件夹并初始化仓库：
   - 编辑器点击初始化仓库，或终端：git init
2. 设置身份：
   - git config user.name "你的姓名"
   - git config user.email "你的邮箱"
3. 创建或确认目录结构：
   - 课程与资料在 lessons/、cheatsheets/
   - 游戏示例在 俄罗斯方块/（index.html、style.css、src/）
   - 若文件还在根目录，用 git mv 移动保持历史：
     - git mv index.html 俄罗斯方块/index.html
     - git mv style.css 俄罗斯方块/style.css
     - git mv src 俄罗斯方块/src
4. 查看状态：git status
5. 首次提交：
   - git add .
   - git commit -m "feat: 初始化仓库并分离课程与示例"
6. 用 GitLens 在文件中查看每行的最后一次提交与作者
