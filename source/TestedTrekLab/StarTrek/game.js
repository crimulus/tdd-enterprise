function Game(){

  var self = this;
  var restListeners = [];

  self.lapsedTime = 0;
  self.quadrant = [];

  //Initialize empty 10x10 quadrant
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


  self.addShip = function(ship) {

    if (!(ship instanceof Ship)) {
      throw new Error('addShip() was called without passing a valid Ship.');
    }

    self.ship = ship;

    //Set locations of ship and base
    self.ship.quadrantLoc = [1,0];
    self.quadrant[1][0] = self.ship;
    self.base = [0,0];
    self.quadrant[0][0] = self.base;

  };

  self.isShipAdjacentToBase = function() {

    var x0 = self.ship.quadrantLoc[0];
    var y0 = self.ship.quadrantLoc[1];
    var x = self.base[0];
    var y = self.base[1];
    var distance = Math.sqrt((x -= x0) * x + (y -= y0) * y);
    return distance <= 1;

  };

  // Variables
  return self;

}
