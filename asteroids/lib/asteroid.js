const Util = require('./util');
const MovingObject = require('./moving_object');

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 5
};

const Asteroid = function Asteroid(options = {}) {
  options.color = DEFAULTS.COLOR;
  // options.pos = options.pos || options.game.randomPosition();
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

  MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);
