import ByteMix from "../main";

export default class Sprite extends ByteMix {
  constructor() {
    super();
    // return this.image;
  }
  loadImage(imgSrc, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = imgSrc;
    this.image.onload = () => {
      this.ctx.drawImage(this.image, x, y, w, h);
    };
  }
  drawImage() {}
}
