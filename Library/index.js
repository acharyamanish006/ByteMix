const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
// function helloWorld() {
//   return "helloWorld";
// }

// module.exports = helloWorld;

export default function createWindow(width, height) {
  const ctx = canvas.getContext("2d");
  canvas.width = width || window.innerWidth;
  canvas.height = height || window.innerHeight;
  ctx.fillStyle = "red"
  ctx.fillRect(20, 20, 150, 100);
}

// module.exports = createWindow;
