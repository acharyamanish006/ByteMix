let GameLoop = {
  Init: function () {
    console.log("INIT");
  },
  UpdateFrame: function () {
    console.log("UF");
  },
  Render: function () {
    this.Init();
    setInterval(this.UpdateFrame, 1000 / 60);
  },
};
export default GameLoop;
