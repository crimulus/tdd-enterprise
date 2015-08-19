describe("Subsystem", function() {

  var subsystem;

  describe("Construction", function(){
    it('should throw an error if a Subsystem is constructed without a minEnergyToCauseDamage', function () {
      expect(function () {
        var subsystemWithNoMinEnergy = new Subsystem();
      }).toThrow();
    });

    it('should throw an error if a Subsystem is constructed with a minEnergyToCauseDamage that is NaN', function () {
      expect(function () {
        var subsystemWithNaNMinEnergy = new Subsystem('a');
      }).toThrow();
    });

    it('should throw an error if a Subsystem is constructed with a minEnergyToCauseDamage that is less than zero', function () {
      expect(function () {
        var subsystemWithNegativeMinEnergy = new Subsystem(-1);
      }).toThrow();
    });
  });

  describe("Basics", function() {
    beforeEach(function () {
      subsystem = new Subsystem(500);
    });

    describe("damage assessment", function () {
      it("should be undamaged by default", function () {
        expect(subsystem.isDamaged()).toBe(false);
      });
    });

    describe("damage recovery", function () {
      it("shoulld be 0 days to recover by default", function () {
        expect(subsystem.daysToRecover()).toBe(0);
      });

      it("should not go negative on days to recover when repairing undamaged subsystem", function () {
        subsystem.repair(1);
        expect(subsystem.daysToRecover()).toBe(0);
      });
    });
  });

});
