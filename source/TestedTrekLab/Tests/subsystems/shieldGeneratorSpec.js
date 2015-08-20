describe("ShieldGenerator", function() {

  var shieldGenerator;

  beforeEach(function() {
    var ship = {isDocked: false;}
    shieldGenerator = new ShieldGenerator(ship);
  });

  describe("damage assessment", function(){
    it("should not be damaged if hit by energy level below minimum", function() {
      shieldGenerator.takeHit((shieldGenerator.minimumEnergyToCauseDamage() - 1));
      expect(shieldGenerator.isDamaged()).toBe(false);
    });

    it("should be damaged for one star day if hit by energy level at minimum", function() {
      shieldGenerator.takeHit(shieldGenerator.minimumEnergyToCauseDamage());
      expect(shieldGenerator.isDamaged()).toBe(true);
      expect(shieldGenerator.daysToRecover()).toBe(1);
    });
  });

});
