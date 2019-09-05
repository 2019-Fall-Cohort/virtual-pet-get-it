class App {
    constructor() {
        this.isOn = false;
    }
    startGame() {
        this.isOn = true;
    }
    quitGame() {
        this.isOn = false;
    }
}

module.exports = App;