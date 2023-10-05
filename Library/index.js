// const canvas = document.createElement("canvas");
// function helloWorld() {
//   return "helloWorld";
// }

// module.exports = helloWorld;

// export default

// module.exports = createWindow;

export default class ByteMix {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.width = width;
    this.height = height;
    this.ctx = this.canvas.getContext("2d");
  }
  createWindow() {
    this.canvas.width = this.width || window.innerWidth;
    this.canvas.height = this.height || window.innerHeight;
  }
  createBox(x, y, width, height) {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(x, y, width, height);
  }
}
