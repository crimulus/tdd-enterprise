function Shield() {
  var self = this;

  //private
  var shieldsRaised = false;
  var energyLevel = 4000;

  //public
  self.minEnergyLevel = 0;
  self.maxEnergyLevel = 10000;

  self.isUp = function() {
    return shieldsRaised;
  }

  self.getEnergyLevel = function() {
    return energyLevel;
  }

  return self;
};

