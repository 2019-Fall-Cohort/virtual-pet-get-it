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
    describe(`gettingSick`, () => {
        test('should increase illness by 5', () => {
            //Arrange
            let currentSickness = underTest.sickness
            //Act
            underTest.gettingSick()
            //Assert
            expect(underTest.sickness).toEqual(currentSickness + 5);
        }); 
    });
    describe('checkSickness', () => {
        test('should change isSick to "true" if sickness greater than 70', () => {
            //Arrange
            underTest.gettingSick(70);
            //Act
            underTest.checkSickness();
            //Assert
            expect(underTest.isSick).toBeTruthy();
        });
    });
    describe('gettingHungry', () => {
        test('should increase hunger by 10', () => {
            //Arrange
            let currentHunger = underTest.hunger;
            //Act
            underTest.gettingHungry();
            //Assert
            expect(underTest.hunger).toEqual(currentHunger + 10);
        });
    });
});