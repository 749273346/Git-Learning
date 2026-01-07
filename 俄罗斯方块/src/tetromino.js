const SHAPES = {
  I: [[1,1,1,1]],
  O: [[1,1],[1,1]],
  T: [[0,1,0],[1,1,1]],
  S: [[0,1,1],[1,1,0]],
  Z: [[1,1,0],[0,1,1]],
  J: [[1,0,0],[1,1,1]],
  L: [[0,0,1],[1,1,1]],
}
const COLORS = ["#00f0f0","#f0f000","#a000f0","#00f000","#f00000","#0000f0","#f0a000"]

export class Piece {
  constructor(matrix,color) {
    this.matrix = matrix
    this.color = color
    this.x = 0
    this.y = 0
  }
  rotate(reverse=false) {
    const m = this.matrix
    const h = m.length, w = m[0].length
    const r = Array.from({length:w}, ()=>Array(h).fill(0))
    for (let y=0;y<h;y++) for (let x=0;x<w;x++) {
      if (reverse) r[w-1-x][y] = m[y][x]
      else r[x][h-1-y] = m[y][x]
    }
    this.matrix = r
  }
  draw(ctx) {
    const size = 24
    for (let y=0;y<this.matrix.length;y++) {
      for (let x=0;x<this.matrix[y].length;x++) {
        if (!this.matrix[y][x]) continue
        ctx.fillStyle = this.color
        ctx.fillRect((this.x+x)*size,(this.y+y)*size,size,size)
        ctx.strokeStyle = "#222"
        ctx.strokeRect((this.x+x)*size,(this.y+y)*size,size,size)
      }
    }
  }
}

export function createRandomTetromino() {
  const keys = Object.keys(SHAPES)
  const i = Math.floor(Math.random()*keys.length)
  const matrix = SHAPES[keys[i]]
  const color = COLORS[i]
  return new Piece(matrix,color)
}
