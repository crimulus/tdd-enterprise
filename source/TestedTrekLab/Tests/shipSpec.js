describe("ship", function() {

  var ship;

  beforeEach(function() {
    ship = new Ship();
  });

  it("should have energy reserves starting at 20,000", function() {
    expect(ship.energyReserves).toEqual(20000);
  });

});
