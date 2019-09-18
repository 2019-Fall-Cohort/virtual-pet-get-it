const Shelter = require('./Shelter');
const Pet = require('./OrganicPet');

describe("Shelter", () => {
    const underTest = new Shelter();
    describe("getPetNames", () => {
        test("Should return 2 when adding 2 pets with addPet", () => {
            //Arrange
            const underPetTest = new Pet("Barbara", 0);
            const underPetTestTwo = new Pet("Oscar", 1);
            //Act
            underTest.admitPet(underPetTest);
            underTest.admitPet(underPetTestTwo);
            //Assert
            expect(underTest.pets.size).toEqual(2);
        });
    });
    describe("admitPet", () => {
        test("Should throw Error if admitPet not passed Pet object", () => {
            expect(() => {
                //Arrange
                const underPetTest = "This is a string not a pet, lol";
                //Act
                underTest.admitPet(underPetTest);
                //Assert
                underTest.admitPet(underPetTest);
            }).toThrow("Error, a Pet class should be provided!")
        });
    });
    describe("adoptPet", () => {
        test("should remove pet from map", () => {
            //Arrange
            const underPetTest = new Pet("Georgia", 7)
            //Act
            underTest.admitPet(underPetTest);
            let currentPetCount = (underTest.pets.size);
            underTest.adoptPet(underPetTest.id);
            //Assert
            expect(underTest.pets.size).toBe(currentPetCount -1);
        });
    });
});
