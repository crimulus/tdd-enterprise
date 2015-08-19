describe("WarpEngine", function() {

  var warpEngine;

  beforeEach(function() {
    warpEngine = new WarpEngine();
  });

  describe("damage assessment", function() {
    it("should not be damaged if hit by energy level below minimum", function () {
      warpEngine.takeHit((warpEngine.minEnergyToCauseDamage - 1));
      expect(warpEngine.isDamaged()).toBe(false);
    });

    it("should be damaged for one star day if hit by energy level at minimum", function () {
      warpEngine.takeHit(warpEngine.minEnergyToCauseDamage);
      expect(warpEngine.isDamaged()).toBe(true);
      expect(warpEngine.daysToRecover()).toBe(1);
    });
  });

});
