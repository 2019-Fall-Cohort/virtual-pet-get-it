const input = require('readline-sync');
class App {
    constructor() {
        this.isOn = false;
    //     this.startMenu();
    }
    startGame() {
        this.isOn = true;
    }
    quitGame() {
        this.isOn = false;
        // this.startMenu();
    }
    // pet methodz
    feedPet() {
        {food}
    }

    startMenu(startMenuInput = "n") {
        if (startMenuInput === "y"){
            this.startGame()
            return;
        } else {
            let displayText = "*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~\n" +
            "~ Awesome Virtual Pet Amok! ~\n" +
            " *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~";
            console.log(displayText);
            let startCount = 0
            let startQuestion = " Start the Game?\n y/n > ";
            let startInput = input.question(startQuestion).toLowerCase();
            while (!this.isOn && startInput !== "y") {
                startInput = input.question(" > ").toLowerCase();
                this.startMenuProceed(startInput)
                startCount += 1;
                if (startCount <= 3, this.quitGame);{
                    break;
                }
            }   
        }
    }
    startMenuProceed(startInput) {
        if (startInput === "y") {
            this.startGame();
        }
    }
}

module.exports = App;

if (require.main == module) {
    const newApp = new App();
    console.log(newApp);
}