const input = require("readline-sync");

const App = require("./src/App")
const Pet = require("./src/Pet");
const OrganicPet = require("./src/OrganicPet");
const Shelter = require("./src/Shelter");
const Cage = require("./src/Cage");

//Initial App Setup
const Shelter = new Shelter();
Shelter.addOrganicPet(newOrganicPet("Jessica", id));

let displayText = "*~*~*~*~*~*~*~*~*~*~*~*~*~*~*\n" +
"~ Awesome Virtual Pet Amok! ~\n" +
"*~*~*~*~*~*~*~*~*~*~*~*~*~*~*";
let appRunning = true;

while (appRunning) {
console.log(displayText);
console.log();
console.log();
console.log("1 - View Your Pets");
console.log();
console.log("2 - Adopt a Pet");
console.log();
console.log("3 - Read Game Reviews");
console.log();
console.log("4 - Quit Game");
console.log();

const userSelection = input.question( 
    "Please select an option"
    );

}

// This is where the main application/user interface will be developed
// options = [ “optionOne", “optionTwo", etc…]

// prompt = console.log(options.forEach((x, y) => {
//     console.log(`${y} - ${x}`);
// })