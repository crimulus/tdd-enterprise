function Ship(game){

  var self = this;

  //Variables
  self.energyReserves = 20000;
  self.subsystems = [];
  self.shields = new Shields();

  self.addSubsystem = function (subsystem) {
    if (subsystem.constructor.name !== 'Subsystem') {
      throw new Error('Passed subsystem is not a subsystem');
    }
    self.subsystems.push(subsystem);
  };

  self.takeEnergy = function (amount) {
    if (amount > (self.energyReserves - 100)) {
      amount = self.energyReserves - 100;
    }
    if (amount < 0) {
      amount = 0;
    }
    self.energyReserves -= amount;
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
