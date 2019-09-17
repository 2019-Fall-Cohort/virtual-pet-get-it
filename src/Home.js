const Cages = require('./Cages');
const Pet = require('./Pet');

class Home {
    constructor(userName="Anonymous") {
        this.userName = userName;
        this.pets = [];
        this.cage = new Cages;
    }
    // Invoked by adoptPet from Shelter Class
    addPet(pet) {
        // .push method returns new length of array
        let newLength = this.pets.push(pet);
        return newLength;
    }
    getPetNames() {
        const petNames = [];
        this.pets.forEach((x) => {
            petNames.push(x.name);
        })
    }
}

module.exports = Home;

