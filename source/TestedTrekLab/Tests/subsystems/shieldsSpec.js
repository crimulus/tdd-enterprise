describe("Shields", function() {

  beforeEach(function() {
  });

  it("tests if shiels are down by default", function() {
    var shield = new Shield();
    expect(shield.isUp()).toBe(true);
  });

});
