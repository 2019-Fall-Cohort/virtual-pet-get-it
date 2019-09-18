const Cages = require('./Cage');

describe("Cage", () => {
    //Arrange
    const underTest = new Cage();
    describe("cleanCage", () => {
        test("cleanCage changes isDirty property to 'false' and poopiness property to 0", () => {
            //Act
            underTest.cleanCage();
            //Assert
            expect(underTest.poopiness).toEqual(0);
            expect(underTest.isDirty).toBeFalsy();
        });
    });
    describe("sullyCage", () => {
        test("sullyCage increases poopiness prop by 5", () => {
            //Arrange
            let currentPoopiness = underTest.poopiness;
            //Act
            underTest.sullyCage(5);
            //Assert
            expect(underTest.poopiness).toEqual(currentPoopiness + 5);
        });
    });
    describe("setDirty", () => {   
        test("setDirty changes isDirty property to 'true' when poopiness set to > 70", () => {
            //Act
            underTest.sullyCage(70)
            underTest.setDirty;
            //Assert
            expect(underTest.poopiness).toBeTruthy();
        });
    });
});