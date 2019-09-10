const App = require('./App');

describe("Application", () => {
    describe("quitGame", () => {
        test("quitGame changes isOn property to 'false'", () => {
            //Arrange
            const funGame = new App();
            //Act
            funGame.quitGame();
            const isWorking = funGame.isOn;
            //Assert
            expect(isWorking).toBeFalsy();
        });
    });
    describe("startGame", () => {   
        test("startGame changes isOn property to 'true'", () => {
            //Arrange
            const funGame = new App();
            //Act
            funGame.startGame();
            const isOff = funGame.isOn;
            //Assert
            expect(isOff).toBeTruthy
        });
    });
    describe("startMenuProceed", () => {
        test("startMenuProceed changes isOn to 'true'") 
            //Arrange
            const funGame = new App();
            //Act
            funGame.startMenuProceed("fcukshitfuck");
            //Assert
            expect(funGame.isOn).toBeTruthy()
    });

        // Too mind-blowing; object interaction
        // test("expect feedPet to return 5 above original value", () => {
        //     //Arrange
        //     const funGame = new App();
        //     //Act
            
        //     //Assert
        //     expect("DISAPPOINTMENT")
        // });
    });
});