# ByteMix

Overview

**ByteMix** is a lightweight and versatile JavaScript game library designed to simplify game development with a focus on performance and flexibility.

![Screenshot from 2024-06-23 13-45-40](https://github.com/acharyamanish006/ByteMix/assets/100832817/ae74770b-2eee-48bd-9636-3aef99968f31)

## Table of Contents

- [Installation](#installation)
- [Example](#example)

## Installation

To install the `ByteMix` package, you can use npm:

```bash
npm i bytemix
```

## Example

```bash
import ByteMix from "../Library/main";
import staticBody from "../Library/staticBody/staticBody";
import GameLoop from "../Library/gameLoop/gameLoop";
import Collision from "../Library/Collision/collision";
import WindowCollision from "../Library/Collision/windowCollision";
import Sprite from "../Library/Sprite/sprite";

const WIDTH = 500;
const HEIGHT = 500;

let posx = 40;
let posy = 40;
let VELOCITY = 5;
let Movement = 7;

const byteMix = new ByteMix();

let player = new staticBody(20, 20, 20, 20);

 let player1 = new staticBody();

let ship = new Sprite();
ship.loadImage("ship.png", posx, 20, 20, 20);
 let ship = sprite.loadImage("ship", "./public/ship.png"); let ship = new Image();
ship.src = "ship.png";
console.log(ship);
player.drawImg(ship, 20, 20);

// The `Init` function is called once at the beginning to initialize the game.

GameLoop.Init = () => {
  ship.drawImage();

  byteMix.createWindow(WIDTH, HEIGHT);
  console.log(byteMix.height);
 player.drawImg(ship, 20, 20, 20, 20);
  player.append(ship);

  ship.onload = function () {
    byteMix.drawImg(ship, 20, 20, 20, 20);
 };
  player.draw();

  document.addEventListener("click", () => {
    player.moveRight(Movement);
  });
  console.log("Initialization completed.");
  
  };
  
// The `UpdateFrame` function is called 60 times per second to update the game state.

GameLoop.UpdateFrame = () => {
  ship.loadImage("ship.png", posx, posy, 20, 20);
  if (WindowCollision.height(ship, byteMix)) {
    console.log("collied");
    VELOCITY = -VELOCITY;
  } else if (WindowCollision.width(ship, byteMix)) {
    console.log("collied");

    Movement = -Movement;
  }

 if (Collision(player, player1)) {
   Movement = -Movement;
 }

 player.moveRight(Movement);
 ship.x += 4;
  posx += 5;
 console.log(ship.x);

  player.addGravity(VELOCITY);
  player1.addGravity(VELOCITY);
  byteMix.clearScreen();
};

// The `Render` function is called after `Init` and `UpdateFrame` to render the current state of the game.
GameLoop.Render();

``
```
