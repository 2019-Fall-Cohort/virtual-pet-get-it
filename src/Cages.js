const input = require('readline-sync');

class Cages { 
    constructor(){
        this.isDirty = true;
        this.poopiness = 5;
    }
    cleanCages() {
        this.poopiness = 0;
        this.isDirty = false;
        successMsg = "this message"
    } 
    sullyCage(poop) {
        // Add <Num> poop to current poopiness property
        this.poopiness += poop;
    }
    setDirty() {
        if (this.poopiness >= 70) {
            this.isDirty = true;
        }
    }
}

/* cleanCages(cleanCageInput = "y") {
    if (cleanCageInput === "y"){
        this.isOn()
        console.log("Hooray, your pet cages are clean!")
        return;

    } else if {
        let displayText = "These pet cages sure look dirty...";
        console.log(displayText);
        let startQuestion = "Clean cages?\n y/n > ";
        console.log(startQuestion);
        break;
        
    else isDirty(isDirtyInput = "n") {
        if (isDirtyInput === "n"){
        this.isOn()
        console.log("You monster...");
        break;
        }
    }
}
} */

module.exports = Cages
