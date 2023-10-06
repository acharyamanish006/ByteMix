export default function Collision(firstBody, secondBody) {
  if (
    firstBody.x < secondBody.x + secondBody.width &&
    firstBody.x + firstBody.width > secondBody.x &&
    firstBody.y < secondBody.y + secondBody.height &&
    firstBody.y + firstBody.height > secondBody.y
  ) {
    console.log("Collision!");
    return true;
  }

  return false;
}
