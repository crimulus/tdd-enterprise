describe("Phaser", function() {

  var phaser;

  beforeEach(function() {
      phaser = new Phaser();
  });

  describe("damage assessment", function() {
    it("should not be damaged if hit by energy level below minimum", function () {
      phaser.takeHit((phaser.minEnergyToCauseDamage - 1));
      expect(phaser.isDamaged()).toBe(false);
    });

    it("should be damaged for one star day if hit by energy level at minimum", function () {
      phaser.takeHit(phaser.minEnergyToCauseDamage);
      expect(phaser.isDamaged()).toBe(true);
      expect(phaser.daysToRecover()).toBe(1);
    });
  });

});
