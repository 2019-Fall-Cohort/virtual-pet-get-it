const Pet = require("./Pet");
describe("Pet", ()=> {
    const underTest = new Pet();
    describe("feed", ()=> { 
        test("should hunger decrease by 10", () => {
            //Arrange
            let currentHunger = underTest.hunger
            //Act
            underTest.feed() 
            //Assert
            expect(underTest.hunger).toEqual(currentHunger - 10);
        })
    }) 
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
            //Act
            underTest.renamePet("Oscar");
            //Assert
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
    describe('takeToDoctor', () => {
        test('should set sickness to 0', () => {
            //Act
            underTest.takeToDoctor();
            //Assert
            expect(underTest.sickness).toEqual(0);
        });
    });
})
    