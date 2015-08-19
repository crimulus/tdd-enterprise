describe("Subsystem", function() {

  var subsystem;

  beforeEach(function() {
      subsystem = new Subsystem();
  });

  describe("damage assessment", function(){
    it("should be undamaged by default", function() {
      expect(subsystem.isDamaged()).toBe(false);
    });

    it("should be damaged if more than one day to recover", function() {
      subsystem.numberOfDaysToRecover = 1;
      expect(subsystem.isDamaged()).toBe(true);
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
