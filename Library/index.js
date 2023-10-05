// const canvas = document.createElement("canvas");
// function helloWorld() {
//   return "helloWorld";
// }

// module.exports = helloWorld;

// export default

// module.exports = createWindow;
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);

export default class ByteMix {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = canvas.getContext("2d");
  }
  createWindow() {
    canvas.width = this.width || window.innerWidth;
    canvas.height = this.height || window.innerHeight;
  }
  createBox(x, y, width, height) {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(x, y, width, height);
  }
}
