describe("WarpEngine", function() {

  var warpEngine;

  beforeEach(function() {
    var ship = {isDocked: false};
    warpEngine = new WarpEngine(ship);
  });

  describe("damage assessment", function() {
    it("should not be damaged if hit by energy level below minimum", function () {
      warpEngine.takeHit(199);
      expect(warpEngine.isDamaged()).toBe(false);
    });

    it("should be damaged for one star day if hit by energy level at minimum", function () {
      warpEngine.takeHit(200);
      expect(warpEngine.isDamaged()).toBe(true);
      expect(warpEngine.daysToRecover()).toBe(1);
    });
  });

});
