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

  describe("subsystems", function () {

    it("should have an array of subsystems", function() {
      expect(ship.subsystems.length).toBe(0);
    });

    it("should expose a method to add new subsystems", function () {
      expect(typeof ship.addSubsystem).toBe('function');
    });

    it("should add a subsystem to the array of subsystems", function () {
      var subsystem = new Subsystem();
      ship.addSubsystem(subsystem);
      expect(ship.subsystems.length).toBe(1);
      expect(ship.subsystems.indexOf(subsystem)).toBe(0);
    });

    it("should throw an error if I try to add a subsystem that is not a subsystem", function () {
      expect(function () {
        ship.addSubsystem('Spock wuz here');
      }).toThrow();
    });

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
      var subsystem1 = new Subsystem();
      var subsystem2 = new Subsystem();
      ship.addSubsystem(subsystem1);
      ship.addSubsystem(subsystem2);
      subsystem1.numberOfDaysToRecover = 3;
      subsystem2.numberOfDaysToRecover = 3;
      game.rest(3);
      expect(subsystem1.numberOfDaysToRecover).toBe(0);
      expect(subsystem2.numberOfDaysToRecover).toBe(0);
    });

    it("should repair over and under damaged systems during game rest", function () {
      var subsystem1 = new Subsystem();
      var subsystem2 = new Subsystem();
      ship.addSubsystem(subsystem1);
      ship.addSubsystem(subsystem2);
      subsystem1.numberOfDaysToRecover = 2;
      subsystem2.numberOfDaysToRecover = 4;
      game.rest(3);
      expect(subsystem1.numberOfDaysToRecover).toBe(0);
      expect(subsystem2.numberOfDaysToRecover).toBe(1);
    });

  });

});
