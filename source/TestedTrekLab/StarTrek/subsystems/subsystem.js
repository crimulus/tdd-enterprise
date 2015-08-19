function Subsystem() {
  var self = this;
  var numberOfDaysToRecover = 0;
  self.minEnergyToCauseDamage;

  self.isDamaged = function() {
    return numberOfDaysToRecover !== 0;
  }

  self.daysToRecover = function() {
    return numberOfDaysToRecover;
  }

  self.repair = function(daysToRecover) {
    if (numberOfDaysToRecover <= daysToRecover) {
      numberOfDaysToRecover = 0;
    } else {
      numberOfDaysToRecover -= daysToRecover;
    }
  }

  self.takeHit = function(energyLevel) {
    if (!isNaN(energyLevel)) {
      numberOfDaysToRecover += Math.floor(energyLevel / self.minEnergyToCauseDamage);
    }
  }

  return self;
};
