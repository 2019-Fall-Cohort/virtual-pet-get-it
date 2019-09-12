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
    describe("getDirty", () => {
        test("getDirty increases poopiness prop by 5", () => {
            //Arrange
            let currentPoopiness = underTest.poopiness;
            //Act
            underTest.getDirty(5);
            //Assert
            expect(underTest.poopiness).toEqual(currentPoopiness + 5);
        })
    })
    describe("setDirty", () => {   
        test("isDirty changes isOn property to 'false'", () => {
            //Arrange

            //Act
            
            //Assert
            
        });
    });