describe("Subsystem", function() {

    var subsystem;

    beforeEach(function() {
        subsystem = new Subsystem();
    });

    it("tests if subsystem is not dammaged by default", function() {
        expect(subsystem.isDamaged()).toBe(false);
    });

    it("tests how many days for subsystem to recover, 0 by default", function() {
        expect(subsystem.daysToRecover()).toBe(0);
    });

});
