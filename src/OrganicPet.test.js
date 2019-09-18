const OrganicPet = require('./OrganicPet');

describe("OrganicPet", () => {
    const underTest = new OrganicPet(undefined, id = 1);
    describe("feed", ()=> { 
        test("should decrease hunger by 10", () => {
            //Arrange
            let currentHunger = underTest.hunger
            //Act
            underTest.feed() 
            //Assert
            expect(underTest.hunger).toEqual(currentHunger - 10);
        })
    })
    describe('takeToDoctor', () => {
        test('should set sickness to 0', () => {
            //Act
            underTest.takeToDoctor();
            //Assert
            expect(underTest.sickness).toEqual(0);
        });
    });
    describe(`makeSick`, () => {
        test('should increase illness by 5', () => {
            //Act
            underTest.makeSick()
            //Assert
            expect(underTest.sickness).toEqual(sickness + 5);
        }); 
    });
    describe('checkSickness', () => {
        test('should change isSick to "false" if sickness greaterthan 70', () => {
            //Arrange
            underTest.makeSick(70);
            //Act
            underTest.checkSickness();
            //Assert
            expect(underTest.isSick).toBeTruthy();
        });
    });
});