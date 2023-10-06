import ByteMix from "../Library/main";
import staticBody from "../Library/staticBody/staticBody";
import GameLoop from "../Library/gameLoop/gameLoop";
import Collision from "../Library/Collision/collision";
import WindowCollision from "../Library/Collision/windowCollision";

const WIDTH = 500;
const HEIGHT = 500;

let VELOCITY = 5;
let Movement = 7;

const byteMix = new ByteMix();
let player = new staticBody(30, 30, 50, 50);
let player1 = new staticBody(120, 30, 50, 50);

// The `Init` function is called once at the beginning to initialize the game.
GameLoop.Init = () => {
  byteMix.createWindow(WIDTH, HEIGHT);
  console.log(byteMix.height);

  document.addEventListener("click", () => {
    player.moveRight(Movement);
  });
  console.log("Initialization completed.");
};

// The `UpdateFrame` function is called 60 times per second to update the game state.
GameLoop.UpdateFrame = () => {
  if (WindowCollision.height(player, byteMix)) {
    VELOCITY = -VELOCITY;
  } else if (WindowCollision.width(player, byteMix)) {
    Movement = -Movement;
  }

  // if (Collision(player, player1)) {
  //   Movement = -Movement;
  // }

  player.moveRight(Movement);

  player.addGravity(VELOCITY);
  // player1.addGravity(VELOCITY);
};

// The `Render` function is called after `Init` and `UpdateFrame` to render the current state of the game.
GameLoop.Render();
