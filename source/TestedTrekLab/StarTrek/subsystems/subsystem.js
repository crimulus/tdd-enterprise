function Subsystem() {
    var self = this;
    self.numberOfDaysToRecover = 0;

    self.isDamaged = function() {
        return self.numberOfDaysToRecover !== 0;
    }

    self.daysToRecover = function() {
        return self.numberOfDaysToRecover;
    }

    return self;
};

