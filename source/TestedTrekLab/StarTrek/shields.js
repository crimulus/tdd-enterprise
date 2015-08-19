function Shield() {
    var self = this;
    self.shieldsRaised = false;
    self.energyLevel = 4000;

    self.isUp = function() {
      return self.shieldsRaised;
    }

    self.getEnergyLevel = function() {
      return self.energyLevel;
    }

    return self;
};

