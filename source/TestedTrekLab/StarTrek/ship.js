function Ship(game){

  var self = this;

  //Variables
  self.energyReserves = 20000;
  self.phaser = new Phaser();
  self.warpEngine = new WarpEngine();
  self.shieldGenerator = new ShieldGenerator();
  self.shields = new Shields(this);

  self.takeEnergy = function (amount) {
    if (amount > (self.energyReserves - 100)) {
      amount = self.energyReserves - 100;
    }
    if (amount < 0) {
      amount = 0;
    }
    self.energyReserves -= amount;
    return amount;
  };

  game.addRestListener(function (daysRested) {
    self.phaser.repair(daysRested);
    self.warpEngine.repair(daysRested);
    self.shieldGenerator.repair(daysRested);
  });

  return self;

}
