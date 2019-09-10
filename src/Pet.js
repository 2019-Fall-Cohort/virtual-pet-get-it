class Pet { 
    constructor(){
        this.hunger = 100
        this.boredom = 100  
    }
   
    feed() {
        this.hunger -= 10
    } 
    play() {
        this.boredom -= 10
    }
    
}

module.exports = Pet