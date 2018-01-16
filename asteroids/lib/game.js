const Asteroid = require("./asteroid");

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ships = [];
  this.addAsteroids();
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function addAsteroids() {
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.add(new Asteroid({game: this}));
  }
};
