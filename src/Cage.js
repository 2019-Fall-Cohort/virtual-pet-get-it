const input = require('readline-sync');

class Cage { 
    constructor(petName){
        this.isDirty = true;
        this.poopiness = 5;
        this.name = `${petName}'s Cage`
    }
    cleanCage() {
        this.poopiness = 0;
        this.isDirty = false;
    } 
    sullyCage(poop) {
        // Add <Num> poop to current poopiness property
        this.poopiness += poop;
        if (this.poopiness > 100) {
            this.poopiness = 100;
        }
    }
    setDirty() {
        if (this.poopiness >= 70) {
            this.isDirty = true;
        }
    }
    tick() {
        this.sullyCage(5)
        this.setDirty()
    }
}

module.exports = Cage

