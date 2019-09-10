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
})
    