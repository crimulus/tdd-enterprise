function Shield() {
  var self = this;

  //private
  var isRaised = false;
  var energyLevel = 4000;

  //public
  self.minEnergyLevel = 0;
  self.maxEnergyLevel = 10000;

  self.isRaised = function() {
    return isRaised;
  }

  self.getEnergyLevel = function() {
    return energyLevel;
  }

  self.setRaised = function (raised){
    isRaised = raised;
  }

  return self;
};

