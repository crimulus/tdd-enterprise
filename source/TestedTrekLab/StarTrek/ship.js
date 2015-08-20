function Ship(game){

  var self = this;

  //Variables
  self.energyReserves = 20000;
  self.phaser = new Phaser(self);
  self.warpEngine = new WarpEngine(self);
  self.shieldGenerator = new ShieldGenerator(self);
  self.quadrantLoc = [];
  self.shields = new Shields(this);
  self.isDocked = false;

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

  self.damage = function(damage){
    var uncoveredDamage = self.shields.damage(damage);
    if(uncoveredDamage > 0){
      self.selectRandomSubsystem().takeHit(uncoveredDamage);
    }
  }

  self.selectRandomSubsystem = function () {
    var randomValue = Math.random();

    if(randomValue < .3333){
      return self.phaser;
    } else if(randomValue < .6666){
      return self.warpEngine;
    } else{
      return self.shieldGenerator;
    }
  }

  self.move = function(x,y) {
    self.quadrantLoc = [x,y];
  };

  self.dock = function () {
    if (game.isShipAdjacentToBase()) {
      self.isDocked = true;
    }
  };

  game.addRestListener(function (daysRested) {
    if(self.isDocked) {
      self.energyReserves = 20000;
      daysRested *= 3;
    }
    self.phaser.repair(daysRested);
    self.warpEngine.repair(daysRested);
    self.shieldGenerator.repair(daysRested);
  });

  return self;

}
