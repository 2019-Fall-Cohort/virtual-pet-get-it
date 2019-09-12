const Cages = require('./Cages');
const Pet = require('./Pet');

class Home {
    constructor(userName) {
        this.userName = userName;
        this.pets = [];
        this.cage = new Cages;
    }
    addPet(pet) {
        this.pets.push(pet);
    }
    getPetNames() {
        const petNames = [];
        this.Home.forEach((x) => {
            petNames.push(x.name);
        })
    }
}

