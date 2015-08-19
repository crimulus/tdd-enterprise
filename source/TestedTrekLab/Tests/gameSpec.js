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

  it("should have an empty array of subsystems", function() {
    expect(game.subsystems.length).toBe(0);
  });

});
