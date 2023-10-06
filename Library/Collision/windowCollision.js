// export default function WindowCollision(player, window) {
//   if (
//     player.x + player.width >= window.width ||
//     player.y + player.height >= window.height
//   ) {
//     console.log("Window Collision!");
//     return true;
//   } else if (player.x <= 0 || player.y <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

let WindowCollision = {
  height: (player, window) => {
    if (player.y + player.height >= window.height || player.y <= 0) {
      return true;
    } else {
      return false;
    }
  },
  width: (player, window) => {
    if (player.x + player.width >= window.width || player.x <= 0) {
      return true;
    } else {
      return false;
    }
  },
};

export default WindowCollision;
