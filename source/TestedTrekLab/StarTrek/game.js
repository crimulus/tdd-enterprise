function Game(){

  var self = this;
  var restListeners = [];

  self.lapsedTime = 0;
  self.quadrant = [];
  self.base = [0,0];

  for(var x = 0; x < 10; x++){
    self.quadrant[x] = [];
    for(var y = 0; y < 10; y++){
      self.quadrant[x][y] = undefined;
    }
  }

  self.rest = function (daysToRest) {
    self.lapsedTime += daysToRest;
    for (var i in restListeners) {
      restListeners[i](daysToRest);
    };
  };

  self.addRestListener = function (callback) {
    if (typeof callback !== 'function') {
      throw new Error('callback passed was not a function.');
    }
    restListeners.push(callback);
  };

  self.ship = new Ship(self);
  self.ship.quadrantLoc = [1,0];
  self.quadrant[1][0] = self.ship;

  // Variables
  return self;

}
