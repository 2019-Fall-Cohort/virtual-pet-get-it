class Pet { 
    constructor(){
        this.hunger = getRandomInt(50,100);
        this.boredom = getRandomInt(50,100);
        //this.hunger = 100
        
    }
   
    feed() {
        this.hunger -= 10
    } 
    play() {
        this.boredom -= 10
    }
}

module.exports = Pet

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }