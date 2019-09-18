// const Pet = require("./Pet"); 
const OrganicPet = require("./OrganicPet");
describe("Pet", ()=> {
    const underTest = new OrganicPet("Jessica", 1);

    describe("play",()=> {
        test("should decrease boredom by 10", () => {
            //Arrange
            let currentBoredom = underTest.boredom
            //Act
            underTest.play()
            //Assert
            expect(underTest.boredom).toEqual(currentBoredom - 10);
        })
    })
    describe('renamePet', () => {
        test('should rename name property with "Oscar"', () => {
            //Arrange
            let currentName = underTest.name;
            //Act
            underTest.renamePet("Oscar");
            //Assert
            expect(currentName).toBe("Jessica"); // Check that it defaults to Jessica
            expect(underTest.name).toBe("Oscar");
        });
    });
    describe('setAdopted', () => {
        test('should change isAdopted prop to True', () => {
            //Act
            underTest.setAdopted();
            //Assert
            expect(underTest.isAdopted).toBeTruthy();
        });
    });
    describe('gettingBored', () => {
        test('should increase bored property by 10', () => {
            //Arrange
            let currentBoredom = underTest.boredom;
            //Act
            underTest.gettingBored();
            //Assert
            expect(underTest.boredom).toEqual(currentBoredom + 10);
        });
    });

})
    