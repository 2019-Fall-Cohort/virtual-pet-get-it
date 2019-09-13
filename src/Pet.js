class Pet { 
    constructor(name="Jessica", id){
        this.name = name;
        this.id = id
        this.hunger = getRandomInt(50,100);
        this.boredom = getRandomInt(50,100);
        this.sickness = getRandomInt(0,50);
        this.isSick = false;
        this.isAdopted = false;
        //this.hunger = 100
    }
    feed() {
        this.hunger -= 10;
    } 
    play() {
        this.boredom -= 10;
    }
    renamePet(newName) {
        this.name = newName;
    }
    setAdopted() {
        this.isAdopted = true;
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

module.exports = Pet

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }