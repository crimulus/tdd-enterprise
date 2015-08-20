describe("game", function() {

  var game;
  var ship;

  beforeEach(function() {
    game = new Game();
    ship = new Ship(game);
  });

  it("should have zero lapsed time", function() {
    expect(game.lapsedTime).toBe(0);
  });

  it("should have lapsed time of 3 days after resting 3 days", function() {
    game.rest(3);
    expect(game.lapsedTime).toBe(3);
  });

  it("should have a function to add rest listeners", function () {
    expect(typeof game.addRestListener).toBe('function');
  });

  it("should throw an error if an attempt to add a listener that is not a function is made", function () {
    expect(function () {
      game.addRestListener("not a function")
    }).toThrow();
  });

  it("should call my rest callback when resting", function () {
    var called = false;
    game.addRestListener(function () {
      called = true;
    });
    game.rest(3);
    expect(called).toBe(true);
  });

  it("should have a multi-dimensional 10x10 array as quadrant", function () {
    expect(Array.isArray(game.quadrant)).toBe(true);
    expect(game.quadrant.length).toBe(10);

    for(i in game.quadrant) {
      expect(game.quadrant[i].length).toBe(10);
    }
  });

  describe("Game initialization", function () {

    beforeEach(function() {
      game.ship = null;
    });

    it("should add ship to game object", function () {
      game.addShip(ship);
      expect(game.ship).toEqual(ship);
    });

    it("should throw an error if param passed to addShip is not of type Ship", function () {
      expect(function () {
        game.addShip("IT'S A TRAP")
      }).toThrow();
    });

    it("should have a 2D array as [x,y] in quadrant", function () {
      game.addShip(ship);
      expect(Array.isArray(game.ship.quadrantLoc)).toBe(true);
      expect(game.ship.quadrantLoc.length).toBe(2);
    });

    it("should set ship initial position to [0,0]", function () {
      game.addShip(ship);
      expect(game.ship.quadrantLoc).toEqual([1,0]);
    });

    it("should add itself to the game quadrant", function () {
      game.addShip(ship);
      expect(game.quadrant[1][0]).toEqual(game.ship);
    });

    it("should have base member as array", function () {
      game.addShip(ship);
      expect(Array.isArray(game.base)).toBe(true);
      expect(game.base.length).toBe(2);
    });

    it("should add ship to game quadrant", function () {
      game.addShip(ship);
      expect(game.quadrant[1][0]).toEqual(game.ship);
    });

  });

});
