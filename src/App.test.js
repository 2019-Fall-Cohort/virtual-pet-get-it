const App = require('./App');

describe("Application", () => {
    describe("quitGame", () => {
        test("isOn property defaults to 'false'", () =>{
            //Arrange
            const funGame = new App();
            //Act
            const notOn = funGame.isOn;
            //Assert
            expect(notOn).toBeTruthy();
        });
        test("quitGame changes isOn property to 'false'", () => {
            //Arrange
            const funGame = new App();
            //Act
            funGame.quitGame();
            const isWorking = funGame.isOn;
            //Assert
            expect(isWorking).toBeFalsy();
        });
        test("startGame changes isOn property to 'true'", () => {
            //Arrange
            const funGame = new App();
            //Act
            funGame.startGame();
            const isOff = funGame.isOn;
            //Assert
            expect(isOff).toBeTruthy();
        });
    });
})