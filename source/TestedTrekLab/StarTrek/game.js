function Game(){

  var self = this;
  var restListeners = [];

  self.lapsedTime = 0;

  self.rest = function (daysToRest) {
    self.lapsedTime += daysToRest;
    for (var i in restListeners) {
      restListeners[i]();
    };
  };

  self.addRestListener = function (callback) {
    if (typeof callback !== 'function') {
      throw new Error('callback passed was not a function.');
    }
    restListeners.push(callback);
  };

  // Variables
  return self;

}
