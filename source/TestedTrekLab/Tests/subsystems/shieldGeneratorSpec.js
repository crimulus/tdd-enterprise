describe("ShieldGenerator", function() {

    var shieldGenerator;

    beforeEach(function() {
      shieldGenerator = new ShieldGenerator();
    });

    it("tests if shield generator subsystem is not damaged by hit", function() {
      shieldGenerator.takeHit(499);
      expect(shieldGenerator.isDamaged()).toBe(false);
    });

    it("tests if shield generator subsystem is damaged by hit for 1 star day", function() {
      shieldGenerator.takeHit(500);
      expect(shieldGenerator.isDamaged()).toBe(true);
      expect(shieldGenerator.daysToRecover()).toBe(1);
    });


});
