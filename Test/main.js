import ByteMix from "../Library/main";
import staticBody from "../Library/staticBody/staticBody";

const WIDTH = 500;
const HEIGHT = 500;

const byteMix = new ByteMix();

byteMix.createWindow(WIDTH, HEIGHT);
// byteMix.createBox(20, 20, 400, 500);
// byteMix.createBox(0, 20, 40, 50);

let player = new staticBody(30, 30, 50, 50);
let player1 = new staticBody(120, 30, 50, 50);

function gameLoop(velocity) {
  if (player.y >= HEIGHT) {
    velocity = -velocity;
  } else if (player.y <= 0) {
    velocity = -velocity;
  }
  player.addGravity(velocity);
  player1.addGravity(velocity);

  console.log("gameloop");
  setTimeout(() => {
    gameLoop(velocity);
  }, 1000 / 60);
}
gameLoop(5);

document.addEventListener("click", () => {
  player.moveRight(5);
});
