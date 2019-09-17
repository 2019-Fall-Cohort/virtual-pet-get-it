const Pet = require('./Pet');

class OrganicPet extends Pet {
    constructor(name, id) {
        super(name, id);
        this.hunger = getRandomInt(50,100);
        this.sickness = getRandomInt(0,50);
        this.isSick = false;
    }
    feed() {
        this.hunger -= 10;
    } 
    // Health Methods
    takeToDoctor() {
        this.sickness = 0;
    }
    makeSick(illness = 5) {
        this.sickness += illness;
        if (this.sickness > 100) {
            this.sickness = 100;
        }
    }
    checkSickness() {
        if (this.sickness >= 70 ) {
            this.isSick = true;
        }
    }
}

module.exports = OrganicPet;

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }