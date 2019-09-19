const input = require("readline-sync");

const App = require("./src/App")
const Pet = require("./src/Pet");
const OrganicPet = require("./src/OrganicPet");
const Shelter = require("./src/Shelter");
const Cage = require("./src/Cage");

//Initial App Setup
const petJail = new Shelter();
petJail.admitPet(new OrganicPet("Jessica", 7));

const displayText = "*~*~*~*~*~*~*~*~*~*~*~*~*~*~*\n" +
"~ Awesome Virtual Pet Amok! ~\n" +
"*~*~*~*~*~*~*~*~*~*~*~*~*~*~*";
let appRunning = true;
let userSelection = "";

while (appRunning) {
    printStartMenu()
    let userSelection = input.question( 
        "Please select an option \n"
    );
    switch (userSelection) {
        
        case "1": 
            printAvailablePets();
            break;

        case "2": 
            adoptPet(name = "Jessica", id);
            break;
            
        case "3": 
            admitPet(name = "Jessica", id);
            break;
            
        case "4": 
            printPetStats();
            break;

        case "5": 
            printPetCages();
            break;

        case "q":
            appRunning = false;
            break;

        default:
            break;
    }
}

function printAvailablePets() {
    const pets = petJail.getPetNamesById();
    pets.forEach(pet => {
       console.log(`${pet}`);
    });
}

// function {

// }

// function{

// }

// function{

// }

// function{

// }

function Quit() {
    isRunning = false;
  }

function printStartMenu() {
    console.log(displayText);
    console.log();
    console.log();
    console.log("1 - View Available Pets in Shelter");
    console.log();
    console.log("2 - Adopt a Pet");
    console.log();
    console.log("3 - Admit Pet to Shelter");
    console.log();
    console.log("4 - Interact with Pets");
    console.log();
    console.log("5 - View Your Pet Cage(s)");
    console.log();
    console.log("q - Quit Game");
    console.log();
}

const printPetStats = () => {
    console.log();
    console.log("What would you like to do?");
    console.log();
    console.log("1 - Feed Pet");
    console.log();
    console.log("2 - Play With Pet");
    console.log();
    console.log("3 - Check Pet's Health");
    console.log();
    console.log("4 - Take Pet to Doctor");
    console.log();
    console.log("5 - Rename Pet");
}

const printPetCages = () => {
    console.log("Clean Cage?");
    console.log();
    console.log("1 - Clean The Poop!");
    console.log();
    console.log("2 - Do Nothing...");
    console.log();
}