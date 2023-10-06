import ByteMix from "../main";

export default class staticBody extends ByteMix {
  constructor(x, y, width, height) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  clearScreen() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight(velocity) {
    this.clearScreen();
    this.x += velocity;
    this.draw();

    console.log(this.x);
  }
  moveLeft(velocity) {
    this.clearScreen();
    this.x -= velocity;
    this.draw();

    console.log(this.x);
  }
  moveUp(velocity) {
    this.clearScreen();
    this.y -= velocity;
    this.draw();

    console.log(this.x);
  }
  moveDown(velocity) {
    this.clearScreen();
    this.y += velocity;
    this.draw();

    console.log(this.x);
  }
  addGravity(velocity) {
    this.clearScreen();
    this.y += velocity;
    this.draw();
  }
}
