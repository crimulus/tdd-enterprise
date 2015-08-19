describe("Shields", function() {

  beforeEach(function() {
    var shield = new Shield();
  });

  it("tests if shields are down by default", function() {
    var shield = new Shield();
    expect(shield.isUp()).toBe(false);
  });

  it("shields should have default energy level of 4000", function() {
    var shield = new Shield();
    expect(shield.getEnergyLevel()).toBe(4000);
  });

});
