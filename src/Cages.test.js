const Cages = require('./Cages');

describe("Cages", () => {
    //Arrange
    const underTest = new Cages();
    describe("cleanCages", () => {
        test("cleanCages changes isDirty property to 'false' and poopiness property to 0", () => {
            //Act
            underTest.cleanCages();
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
            underTest.getDirty(5);
            //Assert
            expect(underTest.poopiness).toEqual(currentPoopiness + 5);
        })
    })
    describe("setDirty", () => {   
        test("setDirty changes isDirty property to 'true' when poopiness set to > 70", () => {
            //Act
            underTest.sullyCage(70)
            underTest.setDirty;
            //Assert
            expect(underTest.poopiness).toBeTruthy();
        });
    });
})