describe("Subsystem", function() {

  var subsystem;

  beforeEach(function() {
    subsystem = new Subsystem(500);
  });

  describe("invalid construction", function () {
    it('should throw an error if a Subsystem is constructed without a minEnergyToCauseDamage', function () {
      expect(function () {
        var subsystemWithNoMinEnergy = new Subsystem();
      }).toThrow();
    });
  });

  describe("damage assessment", function(){
    it("should be undamaged by default", function() {
      expect(subsystem.isDamaged()).toBe(false);
    });
  });

  describe("damage recovery", function() {
    it("shoulld be 0 days to recover by default", function () {
      expect(subsystem.daysToRecover()).toBe(0);
    });

    it("should not go negative on days to recover when repairing undamaged subsystem", function () {
      subsystem.repair(1);
      expect(subsystem.daysToRecover()).toBe(0);
    });
  });

});
