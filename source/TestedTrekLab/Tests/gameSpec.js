describe("game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
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

});
