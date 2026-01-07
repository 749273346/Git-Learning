# 第4课：快速下落功能与分支工作流
目标：在分支上实现快速下落，合并到 main，并用 GitLens查看历史与比较。

1. 创建功能分支
   - git checkout -b feature/hard-drop
2. 修改 俄罗斯方块/src/main.js，增加空格键快速下落：
   - 在 document.addEventListener("keydown", ...) 中加入：
     - else if (e.key === " ") { hardDrop() }
   - 在文件中添加函数：
     - function hardDrop() {
         if (!current) return
         while (!board.collides(current)) { current.y++ }
         current.y--
         board.merge(current)
         const cleared = board.clearLines()
         if (cleared > 0) {
           score += cleared * 100
           scoreEl.textContent = String(score)
         }
         resetPiece()
         draw()
       }
3. 提交分支改动
   - git add 俄罗斯方块/src/main.js
   - git commit -m "feat: 空格键快速下落"
4. 合并到 main
   - git checkout main
   - git merge feature/hard-drop
5. 推送到远程（可选）
   - git push
6. 用 GitLens 比较提交
   - 打开 GitLens 提交视图，选择feat: 空格键快速下落与上一提交，查看差异
