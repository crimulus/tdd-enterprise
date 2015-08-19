describe("WarpEngine", function() {

    var warpEngine;

    beforeEach(function() {
      warpEngine = new WarpEngine();
    });

    it("tests if warp engine subsystem is not damaged by hit", function() {
      warpEngine.takeHit(199);
      expect(warpEngine.isDamaged()).toBe(false);
    });

    it("tests if warp engine subsystem is damaged by hit for 1 star day", function() {
      warpEngine.takeHit(200);
      expect(warpEngine.isDamaged()).toBe(true);
      expect(warpEngine.daysToRecover()).toBe(1);
    });


});
