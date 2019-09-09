const input = require('readline-sync');
class App {
    constructor() {
        this.isOn = false;
        this.startMenu();
    }
    startGame() {
        this.isOn = true;
    }
    quitGame() {
        this.isOn = false;
    }
    startMenu () {
        let displayText = "*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~\n" +
        "~ Awesome Virtual Pet Amok! ~\n" +
        " *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~";
        console.log(displayText);
        let startQuestion = " Start the Game?\n y/n > ";
        let textInput = input.question(startQuestion);
        while (!this.isOn && textInput !== "y") {
            let startQuestion = " > "
            let textInput = input.question(startQuestion);
            if (textInput === "y") {
                this.startGame();
            }
        }
    }   
}

module.exports = App;