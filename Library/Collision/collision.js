function isCircleCollision(circleA, circleB) {
  // Calculate the distance between the centers of the circles
  const distance = Math.sqrt(
    Math.pow(circleA.x - circleB.x, 2) + Math.pow(circleA.y - circleB.y, 2)
  );

  // Check if the distance is less than the sum of the radii
  return distance < circleA.radius + circleB.radius;
}

function isBoxCollision(rectA, rectB) {
  // Check for overlap along the x-axis
  const overlapX =
    rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x;

  // Check for overlap along the y-axis
  const overlapY =
    rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y;

  // Return true if there is overlap along both axes
  return overlapX && overlapY;
}
