describe("ship", function() {

  var ship;

  beforeEach(function() {
    ship = new Ship();
  });

  it("should have energy reserves starting at 20,000", function() {
    expect(ship.energyReserves).toEqual(20000);
  });

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
    var subsystemDecoy = 'Spock wuz here';
    expect(function () {
      ship.addSubsystem(subsystemDecoy);
    }).toThrow();
  });

  it("should expose a method to transfer energy to a subsystem", function () {
    expect(typeof ship.takeEnergy).toBe('function');
  });

  it("should return the amount of energy I requested", function () {
    expect(ship.takeEnergy(500)).toBe(500);
  });

});
