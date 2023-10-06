import ByteMix from "../Library/main";
import staticBody from "../Library/staticBody/staticBody";
import GameLoop from "../Library/gameLoop/gameLoop";

const WIDTH = 500;
const HEIGHT = 500;
let VELOCITY = 5;

const byteMix = new ByteMix();

byteMix.createWindow(WIDTH, HEIGHT);

let player = new staticBody(30, 30, 50, 50);
let player1 = new staticBody(120, 30, 50, 50);
document.addEventListener("click", () => {
  player.moveRight(5);
});

// The `Init` function is called once at the beginning to initialize the game.
GameLoop.Init = () => {
  console.log("Initialization completed.");
};

// The `UpdateFrame` function is called 60 times per second to update the game state.
GameLoop.UpdateFrame = () => {
  // Check if the player has reached the bottom of the screen
  if (player.y >= HEIGHT) {
    // If so, reverse the vertical velocity to make the player bounce upwards
    VELOCITY = -VELOCITY;
  }
  // Check if the player has reached the top of the screen
  else if (player.y <= 0) {
    // If so, reverse the vertical velocity to make the player bounce downwards
    VELOCITY = -VELOCITY;
  }

  // Apply gravity to the player and player1 objects
  player.addGravity(VELOCITY);
  player1.addGravity(VELOCITY);
};

// The `Render` function is called after `Init` and `UpdateFrame` to render the current state of the game.
GameLoop.Render();
