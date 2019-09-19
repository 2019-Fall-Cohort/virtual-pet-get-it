const input = require("readline-sync");

const OrganicPet = require("./src/OrganicPet");
const Shelter = require("./src/Shelter");

//Initial App Setup
const petJail = new Shelter();
petJail.admitPet(new OrganicPet("Jessica", 1));
petJail.admitPet(new OrganicPet("Jessika", 2));
petJail.admitPet(new OrganicPet("Jessyca", 3));
petJail.admitPet(new OrganicPet("Yessica", 4));
petJail.admitPet(new OrganicPet("Hot-Messika", 5));

let appRunning = true;

const displayText = "*~*~*~*~*~*~*~*~*~*~*~*~*~*~*\n" +
    "~ Awesome Virtual Pet Amok! ~\n" +
    "*~*~*~*~*~*~*~*~*~*~*~*~*~*~*";
console.log(displayText);

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
            printAvailablePets();
            while (userSelection !== "q") {
                let (userSelection) = input.question(
                    "Enter the ID of the pet you want to adopt out \n"
                )
            };
            petJail.adoptPet();
            break;
            
        case "3": 
            printAvailablePets();
            while (userSelection !== "q") {
               let (userSelection) = input.question(
                    "Enter the ID of the pet you want to admit into shelter \n"
                )
            };  
            petJail.admitPet();
            break;
            
        case "4": 
            interactWithPet();
            break;

        case "5": 
            cleanCage();
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
    let userSelection = input.question ("Press 'Enter' to Continue")
}
function printStartMenu() {
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
function interactWithPet() {
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
function cleanCage() {
    console.log("Clean Cage?");
    console.log();
    console.log("1 - Clean The Poop!");
    console.log();
    console.log("2 - Do Nothing...");
    console.log();
}