const Home = require('./Home');
const Pet = require('./Pet');
describe("Home", () => {
    const underTest = new Home();
    describe("getPetNames", () => {
        test("Should return 2 when adding 2 pets with addPet", () => {
            //Arrange
            const underPetTest = new Pet("Barbara", 0);
            const underPetTestTwo = new Pet("Oscar", 1);
            //Act
            underTest.addPet(underPetTest);
            let newLength = underTest.addPet(underPetTestTwo);
            //Assert
            expect(newLength).toEqual(2);
        })
    })
})
