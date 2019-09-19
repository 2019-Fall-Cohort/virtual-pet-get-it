class Pet { 
    constructor(name = "Jessica", id){
        if (this.constructor == Pet) {
            throw new Error("Don't use this Class! What are you thinking?");
        }
        this.name = name;
        this.id = id
        this.boredom = getRandomInt(50,100);
    }
    play() {
        this.boredom -= 10;
        if (this.boredom < 0) {
            this.boredom = 0;
        }
    }
    gettingBored() {
        this.boredom += 10;
        if (this.boredom > 100) {
            this.boredom = 100;
        }
    }
    renamePet(newName) {
        this.name = newName;
    }
}

module.exports = Pet

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }