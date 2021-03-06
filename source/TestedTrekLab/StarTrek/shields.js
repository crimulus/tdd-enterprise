function Shields(ship) {
  var self = this;

  //private
  var isRaised = false;
  var energyLevel = 4000;

  //public
  self.minEnergyLevel = 0;
  self.maxEnergyLevel = 10000;
  self.ship = ship;

  self.isRaised = function() {
    return isRaised;
  }

  self.getEnergyLevel = function() {
    return energyLevel;
  }

  self.setRaised = function (raised) {
    if (!ship.shieldGenerator.isDamaged()) {
      isRaised = raised;
    }
  }

  self.damage = function(damage){
    var unabsorbedDamage = damage;
    if(isRaised){
      energyLevel -= damage;

      if(energyLevel < 0){
        //Not enough energy to cover damage
        unabsorbedDamage = Math.abs(energyLevel);
        energyLevel = 0;
      } else{
        unabsorbedDamage = 0;
      }
    }
    return unabsorbedDamage;
  }

  self.transferEnergy = function(energy){
    if (!ship.shieldGenerator.isDamaged()) {
      if ((energyLevel + energy) > self.maxEnergyLevel) {
        var overcharge = (energyLevel + energy) - self.maxEnergyLevel;
        energy -= overcharge;
      }

      var takenEnergy = self.ship.takeEnergy(energy);
      energyLevel += takenEnergy;
    }
  }

  return self;
};

