const Pet = require("./Pet");
describe("Pet", ()=> {
    const underTest = new Pet();
    describe("getHungry", ()=> { 
        test("should increase by 10", () => {
            //Arrange
            let currentHunger = underTest.hunger
            //Act
            underTest.getHungry() 
            //Assert
            expect(underTest.hunger).toEqual(currentHunger + 10);

        })
    })
})