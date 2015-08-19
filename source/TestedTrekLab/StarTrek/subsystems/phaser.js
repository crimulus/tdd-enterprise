function Phaser() {
    var self = new Subsystem();
    self.minEnergyToCauseDamage = 300;

    self.takeHit = function(energyLevel) {

        self.numberOfDaysToRecover += Math.floor(energyLevel/self.minEnergyToCauseDamage);
    }

    return self;
};

