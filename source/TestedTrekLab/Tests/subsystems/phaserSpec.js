describe("Phaser", function() {

    var phaser;

    beforeEach(function() {
        phaser = new Phaser();
    });

    it("tests if phaser subsystem is not damaged by hit", function() {
        phaser.takeHit(299);
        expect(phaser.isDamaged()).toBe(false);
    });

    it("tests if phaser subsystem is damaged by hit for 1 star day", function() {
        phaser.takeHit(300);
        expect(phaser.isDamaged()).toBe(true);
        expect(phaser.daysToRecover()).toBe(1);
    });


});
