const App = require('./App');

describe("Application", () => {
    describe("quitGame", () => {
        test("isOn property defaults to 'false'", () =>{
            //Arrange
            const funGame = new App();
            //Act
            const notOn = funGame.isOn;
            //Assert
            expect(notOn).toBeFalsy();
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
            expect(isOff).toBeTruthy

    
        })
    });
})


// Might use if accessing default properties a ton
const checkDefaultProp = (prop) => {
    //Check default value of given property
    //Assert
    const funGame = new App();
    //Act
    const propCheck = funGame[prop];
    return propCheck;
}