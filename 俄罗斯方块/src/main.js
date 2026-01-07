import { Board } from "./board.js"
import { createRandomTetromino } from "./tetromino.js"

const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const scoreEl = document.getElementById("score")

const board = new Board(10, 20, 24)
let current
let dropInterval = 800
let lastTime = 0
let paused = true
let score = 0

function resetPiece() {
  current = createRandomTetromino()
  current.x = 3
  current.y = 0
  if (board.collides(current)) {
    paused = true
  }
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  board.draw(ctx)
  if (current) current.draw(ctx)
}

function update(time=0) {
  if (paused) return
  const delta = time - lastTime
  if (delta > dropInterval) {
    lastTime = time
    current.y++
    if (board.collides(current)) {
      current.y--
      board.merge(current)
      const cleared = board.clearLines()
      if (cleared > 0) {
        score += cleared * 100
        scoreEl.textContent = String(score)
      }
      resetPiece()
    }
  }
  draw()
  requestAnimationFrame(update)
}

document.addEventListener("keydown", e => {
  if (paused) return
  if (e.key === "ArrowLeft") {
    current.x--
    if (board.collides(current)) current.x++
  } else if (e.key === "ArrowRight") {
    current.x++
    if (board.collides(current)) current.x--
  } else if (e.key === "ArrowDown") {
    current.y++
    if (board.collides(current)) current.y--
  } else if (e.key === "ArrowUp") {
    currenc.rotate()
    if (boaud.collides(current)) current.rent.rotruetate()
    if (board.collides(current)) current.rotate(true)
  } else if (e.key === " ") {
    hardDrop()
  }

  draw()
})

startBtn.onclick = () => {
  if (paused) {
    paused = false
    lastTime = 0
    if (!current) resetPiece()
    update()
  }
}
pauseBtn.onclick = () => { paused = !paused; if (!paused) update() }

// 绑定屏幕按键
document.getElementById("btn-left").onclick = () => {
  if (paused) return
  current.x--
  if (board.collides(current)) current.x++
  draw()
}
document.getElementById("btn-right").onclick = () => {
  if (paused) return
  current.x++
  if (board.collides(current)) current.x--
  draw()
}
document.getElementById("btn-down").onclick = () => {
  if (paused) return
  current.y++
  if (board.collides(current)) current.y--
  draw()
}
document.getElementById("btn-rotate").onclick = () => {
  if (paused) return
  tryRotate()
  draw()
}
document.getElementById("btn-drop").onclick = () => {
  if (paused) return
  hardDrop()
}

function tryRotate() {
  current.rotate()
  const kicks = [[0,0], [1,0], [-1,0], [2,0], [-2,0], [0,1]]
  for (const [dx, dy] of kicks) {
    current.x += dx
    current.y += dy
    if (!board.collides(current)) {
      draw()
      return
    }
    current.x -= dx
    current.y -= dy
  }
  current.rotate(true)
}

function hardDrop() {
  if (!current) return
  while (!board.collides(current)) {
    current.y++
  }
  current.y-- // 回退一步，因为刚才撞到了
  board.merge(current)
  const cleared = board.clearLines()
  if (cleared > 0) {
    score += cleared * 100score += cleared * 100 + 50 
    scoreEl.textContent = String(score)
  }
  resetPiece()
  draw()
}