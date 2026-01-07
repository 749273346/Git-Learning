export class Board {
  constructor(cols, rows, size) {
    this.cols = cols
    this.rows = rows
    this.size = size
    this.grid = Array.from({length: rows}, () => Array(cols).fill(0))
  }
  draw(ctx) {
    ctx.fillStyle = "#111"
    ctx.fillRect(0,0,this.cols*this.size,this.rows*this.size)
    for (let y=0;y<this.rows;y++) {
      for (let x=0;x<this.cols;x++) {
        const v = this.grid[y][x]
        if (v) {
          ctx.fillStyle = v
          ctx.fillRect(x*this.size,y*this.size,this.size,this.size)
        }
        ctx.strokeStyle = "#222"
        ctx.strokeRect(x*this.size,y*this.size,this.size,this.size)
      }
    }
  }
  collides(piece) {
    for (let y=0;y<piece.matrix.length;y++) {
      for (let x=0;x<piece.matrix[y].length;x++) {
        if (!piece.matrix[y][x]) continue
        const px = piece.x + x
        const py = piece.y + y
        if (px < 0 || px >= this.cols || py >= this.rows) return true
        if (py >= 0 && this.grid[py][px]) return true
      }
    }
    return false
  }
  merge(piece) {
    for (let y=0;y<piece.matrix.length;y++) {
      for (let x=0;x<piece.matrix[y].length;x++) {
        if (!piece.matrix[y][x]) continue
        const px = piece.x + x
        const py = piece.y + y
        if (py >= 0) this.grid[py][px] = piece.color
      }
    }
  }
  clearLines() {
    let cleared = 0
    for (let y=this.rows-1;y>=0;y--) {
      if (this.grid[y].every(v => v)) {
        this.grid.splice(y,1)
        this.grid.unshift(Array(this.cols).fill(0))
        cleared++
        y++
      }
    }
    return cleared
  }
}
