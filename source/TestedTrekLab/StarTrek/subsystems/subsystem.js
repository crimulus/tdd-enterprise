function Subsystem(ship, minEnergyToCauseDamage) {

  var self = this;
  var _numberOfDaysToRecover = 0;
  self.ship = ship;

  if( !minEnergyToCauseDamage ){
    throw new Error('Missing min energy');
  }
  else if( isNaN(minEnergyToCauseDamage) ){
    throw new Error('Non-numeric min energy specified');
  }
  else if( minEnergyToCauseDamage <= 0 ){
    throw new Error('Zero or negative min energy specified');
  }

  self.isDamaged = function() {
    return _numberOfDaysToRecover !== 0;
  }

  self.daysToRecover = function() {
    return _numberOfDaysToRecover;
  }

  self.repair = function(daysToRecover) {
    if (_numberOfDaysToRecover <= daysToRecover) {
      _numberOfDaysToRecover = 0;
    } else {
      _numberOfDaysToRecover -= daysToRecover;
    }
  }

  self.takeHit = function(energyLevel) {
    if (!self.ship.isDocked && !isNaN(energyLevel)) {
      numberOfDaysToRecover += Math.floor(energyLevel / minEnergyToCauseDamage);
    }
  }

  self.minimumEnergyToCauseDamage = function(){
    return minEnergyToCauseDamage;
  }

  return self;
};
