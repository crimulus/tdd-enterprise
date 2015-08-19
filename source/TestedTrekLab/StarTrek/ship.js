function Ship(game){

  var self = this;

  //Variables
  self.energyReserves = 20000;
  self.subsystems = [];

  self.addSubsystem = function (subsystem) {
    if (subsystem.constructor.name !== 'Subsystem') {
      throw new Error('Passed subsystem is not a subsystem');
    }
    self.subsystems.push(subsystem);
  };

  self.takeEnergy = function (amount) {
    return amount;
  };

  game.addRestListener(function (daysRested) {
    for (var i in self.subsystems) {
      var subsystem = self.subsystems[i];
      subsystem.numberOfDaysToRecover -= daysRested;
      if (subsystem.numberOfDaysToRecover <= 0) {
        subsystem.numberOfDaysToRecover = 0;
      }
    }
  });

  return self;

}
