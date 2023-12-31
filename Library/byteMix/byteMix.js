export default class ByteMix {
  constructor() {
    this.ctx = ctx;
    this.canvas = canvas;
    console.log("h");
  }
  createWindow(width, height) {
    this.width = width;
    this.height = height;
    document.body.appendChild(this.canvas);
    this.canvas.width = this.width || window.innerWidth;
    this.canvas.height = this.height || window.innerHeight;
  }
  createBox(x, y, width, height) {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(x, y, width, height);
  }
  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
