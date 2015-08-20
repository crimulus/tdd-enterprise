describe("Shields", function() {

  var shields;
  var ship;
  var defaultEnergyLevel = 4000;

  beforeEach(function() {
    ship = new Ship(new Game());
    shields = new Shields(ship);
  });

  it("have a reference to a ship", function() {
    expect(shields.ship).not.toBeNull();
  });

  it("are down by default", function() {
    expect(shields.isRaised()).toBe(false);
  });

  it("should have default energy level of 4000", function() {
    expect(shields.getEnergyLevel()).toBe(defaultEnergyLevel);
  });

  it("should have min shield value 0", function(){
    expect(shields.minEnergyLevel).toEqual(0);
  });

  it("should have max shield value 10000", function(){
    expect(shields.maxEnergyLevel).toEqual(10000);
  });

  it('should be brought up and down after being called', function(){
    shields.setRaised(true);
    expect(shields.isRaised()).toBe(true);
    shields.setRaised(false);
    expect(shields.isRaised()).toBe(false);
  });

  it('cannot be raised if shield generator is damaged', function(){
    shields.ship.shieldGenerator.takeHit(shields.ship.shieldGenerator.minimumEnergyToCauseDamage());
    shields.setRaised(true);
    expect(shields.isRaised()).toBe(false);
  });

  it('can be raised if shield generator is damaged and subsequently repaired', function(){
    shields.ship.shieldGenerator.takeHit(shields.ship.shieldGenerator.minimumEnergyToCauseDamage());
    shields.ship.shieldGenerator.repair(1);
    shields.setRaised(true);
    expect(shields.isRaised()).toBe(true);
  });

  it('should not be damaged if shields are not up', function(){
    var unabsorbedDamage = shields.damage(shields.ship.shieldGenerator.minimumEnergyToCauseDamage());
    expect(shields.getEnergyLevel()).toEqual(defaultEnergyLevel);
    expect(unabsorbedDamage).toEqual(shields.ship.shieldGenerator.minimumEnergyToCauseDamage());
  });

  it('should absorb damage if shields are up', function(){
    shields.setRaised(true);
    var unabsorbedDamage = shields.damage(500);
    expect(shields.getEnergyLevel()).toEqual(defaultEnergyLevel - 500);
    expect(unabsorbedDamage).toEqual(0);
  });

  it('should deplete shields energy to 0 and return remaining damage if too much', function(){
    shields.setRaised(true);
    var unabsorbedDamage = shields.damage(defaultEnergyLevel + 1);
    expect(shields.getEnergyLevel()).toEqual(0);
    expect(unabsorbedDamage).toEqual(1);
  });

  it('should transfer energy to the shield', function(){
    shields.transferEnergy(500);
    expect(shields.getEnergyLevel()).toEqual(defaultEnergyLevel + 500);
  });

  it('should not surpass max', function(){
    shields.transferEnergy(shields.maxEnergyLevel + 1);
    expect(shields.getEnergyLevel()).toEqual(shields.maxEnergyLevel);
  });

  it('should take energy from ship during transfer', function(){
    var shipStartingReserves = ship.energyReserves;
    shields.transferEnergy(500);
    expect(ship.energyReserves).toEqual(shipStartingReserves - 500);
  });

  it('cannot transfer energy if shield generator is damaged', function(){
    var shipStartingReserves = ship.energyReserves;
    shields.ship.shieldGenerator.takeHit(shields.ship.shieldGenerator.minimumEnergyToCauseDamage());
    var shieldsBeginningLevel = shields.getEnergyLevel();
    shields.transferEnergy(500);
    expect(shields.getEnergyLevel()).toEqual(shieldsBeginningLevel);
    expect(ship.energyReserves).toEqual(shipStartingReserves);
  });

  it('can transfer energy if shield generator is damaged and subsequently repaired', function(){
    var shipStartingReserves = ship.energyReserves;
    shields.ship.shieldGenerator.takeHit(shields.ship.shieldGenerator.minimumEnergyToCauseDamage());
    shields.ship.shieldGenerator.repair(1);
    var shieldsBeginningLevel = shields.getEnergyLevel();
    shields.transferEnergy(500);
    expect(shields.getEnergyLevel()).toEqual(shieldsBeginningLevel+500);
    expect(ship.energyReserves).toEqual(shipStartingReserves-500);
  });


});
