function Subsystem(minEnergyToCauseDamage) {

  var self = this;
  var numberOfDaysToRecover = 0;

  if (!minEnergyToCauseDamage) {
    throw new Error('Missing min energy');
  }
  else if( isNaN(minEnergyToCauseDamage) ){
    throw new Error('Non-numeric min energy specified');
  }
  else if( minEnergyToCauseDamage <= 0 ){
    throw new Error('Zero or negative min energy specified');
  }

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
      numberOfDaysToRecover += Math.floor(energyLevel / minEnergyToCauseDamage);
    }
  }

  return self;
};
