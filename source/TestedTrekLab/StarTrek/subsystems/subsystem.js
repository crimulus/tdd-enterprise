function Subsystem() {
    var self = this;
    self.numberOfDaysToRecover = 0;
    self.minEnergyToCauseDamage;

    self.isDamaged = function() {
        return self.numberOfDaysToRecover !== 0;
    }

    self.daysToRecover = function() {
        return self.numberOfDaysToRecover;
    }

    self.repair = function(daysToRecover) {
        if (self.numberOfDaysToRecover <= daysToRecover) {
            self.numberOfDaysToRecover = 0;
        } else {
            self.numberOfDaysToRecover -= daysToRecover;
        }
    }

    return self;
};
