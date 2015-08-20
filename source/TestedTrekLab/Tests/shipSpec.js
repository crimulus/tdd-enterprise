describe("ship", function() {

  var game;
  var ship;

  beforeEach(function() {
    game = new Game();
    ship = new Ship(game);
  });

  it("should have energy reserves starting at 20,000", function() {
    expect(ship.energyReserves).toEqual(20000);
  });

  it("should have phaser subsystem", function() {
    expect(ship.phaser).not.toBeNull();
  });

  it("should have warp engine subsystem", function() {
    expect(ship.warpEngine).not.toBeNull();
  });

  it("should have shield generator subsystem", function() {
    expect(ship.shieldGenerator).not.toBeNull();
  });

  it("should have shields", function() {
    expect(ship.shields).not.toBeNull();
  });

  describe("energy transfer", function () {

    it("should expose a method to transfer energy to a subsystem", function () {
      expect(typeof ship.takeEnergy).toBe('function');
    });

    it("should return the amount of energy I requested", function () {
      expect(ship.takeEnergy(500)).toBe(500);
    });

    it("should subtract the energy I requested from the ship's energy reserves", function () {
      ship.takeEnergy(500);
      expect(ship.energyReserves).toBe(19500);
    });

    it("should not allow the ship's energy to go below 100", function () {
      expect(ship.takeEnergy(20000)).toBe(19900);
      expect(ship.energyReserves).toBe(100);
    });

  });

  describe("damage", function(){

    var originalRandom;

    beforeEach(function(){
      originalRandom = Math.random;
    });

    afterEach(function () {
      Math.random = originalRandom;
    });

    it("should take damage to the shields first if up", function(){
      function stubTakeHit (){
        throw new Error("Subsystem shouldn't be damaged with shields covering hit!");
      }

      ship.phaser.takeHit = stubTakeHit;
      ship.shieldGenerator.takeHit = stubTakeHit;
      ship.warpEngine.takeHit = stubTakeHit;

      var startingShieldsEnergy = ship.shields.getEnergyLevel();
      ship.shields.setRaised(true);
      ship.damage(500);
      expect(ship.shields.getEnergyLevel()).toEqual(startingShieldsEnergy - 500);
    });

    it("should drain shields if damage surpasses shield energy level and attempt to damage subsystem with remaining damage", function(){
      var takeHitCalls = 0;
      var takeHitDamageParam = -1;
      function stubTakeHit (damage) {
        takeHitCalls++;
        takeHitDamageParam = damage;
      }

      ship.phaser.takeHit = stubTakeHit;
      ship.warpEngine.takeHit = stubTakeHit;
      ship.shieldGenerator.takeHit = stubTakeHit;

      var startingShieldsEnergy = ship.shields.getEnergyLevel();
      ship.shields.setRaised(true);
      ship.damage(startingShieldsEnergy + 500);
      expect(ship.shields.getEnergyLevel()).toEqual(0);
      expect(takeHitCalls).toEqual(1);
      expect(takeHitDamageParam).toEqual(500);
    });

    it("should damage a different random subsystem as Math.random varies", function () {
      var randomReturn;
      Math.random = function () {
        return randomReturn;
      }

      spyOn(ship.phaser, "takeHit");
      spyOn(ship.warpEngine, "takeHit");
      spyOn(ship.shieldGenerator, "takeHit");

      randomReturn = 0;
      ship.damage(500);
      expect(ship.phaser.takeHit).toHaveBeenCalled();

      randomReturn = 0.5;
      ship.damage(500);
      expect(ship.warpEngine.takeHit).toHaveBeenCalled();

      randomReturn = 0.8;
      ship.damage(500);
      expect(ship.shieldGenerator.takeHit).toHaveBeenCalled();
    });

  });

  describe("rest", function () {

    it("should repair all subsystems during game rest", function () {
      ship.phaser.takeHit(600);
      ship.warpEngine.takeHit(400);
      ship.shieldGenerator.takeHit(1000);
      game.rest(2);
      expect(ship.phaser.daysToRecover()).toBe(0);
      expect(ship.warpEngine.daysToRecover()).toBe(0);
      expect(ship.shieldGenerator.daysToRecover()).toBe(0);
    });

    it("should repair over and under damaged systems during game rest", function () {
      ship.phaser.takeHit(900);
      ship.warpEngine.takeHit(400);
      ship.shieldGenerator.takeHit(1000);
      game.rest(2);
      expect(ship.phaser.daysToRecover()).toBe(1);
      expect(ship.warpEngine.daysToRecover()).toBe(0);
      expect(ship.shieldGenerator.daysToRecover()).toBe(0);;
    });

  });

});
