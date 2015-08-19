describe("Shields", function() {

  var shield;

  beforeEach(function() {
    shield = new Shield();
  });

  it("are down by default", function() {
    expect(shield.isRaised()).toBe(false);
  });

  it("should have default energy level of 4000", function() {
    expect(shield.getEnergyLevel()).toBe(4000);
  });

  it("should have min shield value 0", function(){
    expect(shield.minEnergyLevel).toEqual(0);
  });

  it("should have max shield value 10000", function(){
    expect(shield.maxEnergyLevel).toEqual(10000);
  });

  it('should be brought up and down after being called', function(){
    shield.setRaised(true);
    expect(shield.isRaised()).toBe(true);
    shield.setRaised(false);
    expect(shield.isRaised()).toBe(false);
  });
});
