# 第5课：旋转优化与墙踢（Wall Kick）
目标：在分支上实现更友好的旋转，当方块紧贴墙或堆叠时尝试位移以完成旋转。

1. 创建分支
   - git checkout -b feature/rotate-wallkick

2. 在 俄罗斯方块/src/main.js 添加旋转尝试函数，并用它替换箭头上键逻辑：
   - 插入函数：
     function tryRotate() {
       current.rotate()
       const kicks = [[0,0],[1,0],[-1,0],[2,0],[-2,0],[0,1]]
       for (const [dx,dy] of kicks) {
         current.x += dx
         current.y += dy
         if (!board.collides(current)) { draw(); return }
         current.x -= dx
         current.y -= dy
       }
       current.rotate(true)
     }
   - 在键盘逻辑中将 ArrowUp 分支替换为：tryRotate()

3. 提交并推送（可选）
   - git add 俄罗斯方块/src/main.js
   - git commit -m "feat: 墙踢旋转，优化紧贴墙的旋转体验"
   - git push -u origin feature/rotate-wallkick

4. 合并到 main
   - git checkout main
   - git merge feature/rotate-wallkick
   - git push

5. 验证
   - 在靠近左/右边界旋转应尽量成功；GitLens查看该提交差异与文件历史
