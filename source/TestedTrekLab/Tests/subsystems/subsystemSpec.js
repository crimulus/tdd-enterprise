describe("Subsystem", function() {

    var subsystem;

    beforeEach(function() {
        subsystem = new Subsystem();
    });

    it("tests if subsystem is not damaged by default", function() {
        expect(subsystem.isDamaged()).toBe(false);
    });

    it("tests how many days for subsystem to recover, 0 by default", function() {
        expect(subsystem.daysToRecover()).toBe(0);
    });

    it("tests if subsystem is damaged", function() {
        subsystem.numberOfDaysToRecover = 1;
        expect(subsystem.isDamaged()).toBe(true);
    });


});
