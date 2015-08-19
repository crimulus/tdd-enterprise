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
