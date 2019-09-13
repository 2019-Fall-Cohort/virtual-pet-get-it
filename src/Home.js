const Cages = require('./Cages');
const Pet = require('./Pet');

class Home {
    constructor(userName="Anonymous") {
        this.userName = userName;
        this.pets = [];
        this.cage = new Cages;
    }
    addPet(pet) {
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

