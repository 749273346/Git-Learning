# 第9课：重构与模块化
目标：把键盘输入逻辑与主循环分离，提升可维护性。

1. 创建输入模块 俄罗斯方块/src/input.js：
   - 内容：
     export function bindInput(onKey) {
       document.addEventListener("keydown", e => { onKey(e.key) })
     }

2. 修改 俄罗斯方块/src/main.js 将原有键盘监听替换为：
   - import { bindInput } from "./input.js"
   - bindInput(key => {
       if (paused) return
       if (key === "ArrowLeft") { current.x--; if (board.collides(current)) current.x++ }
       else if (key === "ArrowRight") { current.x++; if (board.collides(current)) current.x-- }
       else if (key === "ArrowDown") { current.y++; if (board.collides(current)) current.y-- }
       else if (key === "ArrowUp") { tryRotate() }
       else if (key === " ") { hardDrop() }
       draw()
     })

3. 提交并推送
   - git add 俄罗斯方块/src/input.js 俄罗斯方块/src/main.js
   - git commit -m "refactor: 抽离输入模块，简化主循环"
   - git push

4. GitLens
   - 查看重构提交与之前的对比，确认职责分离清晰
