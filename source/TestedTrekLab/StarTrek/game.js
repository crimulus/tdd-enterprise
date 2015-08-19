function Game(){

  var self = this;

  self.lapsedTime = 0;
  self.subsystems = [];

  self.rest = function (days) {
    self.lapsedTime += days;
  }

  // Variables
  return self;

}
