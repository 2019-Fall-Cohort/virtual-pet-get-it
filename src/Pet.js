class Pet { 
    constructor(name="Jessica", id){
        if (this.constructor == Pet) {
            throw new Error("Don't use this Class, what're you thinking?");
        }
        this.name = name;
        this.id = id
        this.boredom = getRandomInt(50,100);
        this.isAdopted = false;
    }
    play() {
        this.boredom -= 10;
    }
    renamePet(newName) {
        this.name = newName;
    }
    setAdopted() {
        this.isAdopted = true;
        this.cage = new Cage
    }
}

module.exports = Pet

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }