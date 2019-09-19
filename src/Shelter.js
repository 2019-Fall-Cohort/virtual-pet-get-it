const Cages = require('./Cage');
const Pet = require('./Pet');

class Shelter {
    constructor(userName="Anonymous") {
        this.userName = userName;
        this.pets = new Map();
    }
    admitPet(pet) {
        if (!(pet instanceof Pet)) {
            throw new Error("Error, a Pet class should be provided!");
        }
        // .push method returns new length of map
        this.pets.set(pet.id, pet);
    }
    getPetNames() {
        const petNames = [];
        this.pets.forEach((pet) => {
            petNames.push(pet.name);
        })
        return petNames;
    }
    getPetNamesById() {
        const getPetNamesById = [];
        this.pets.forEach((pet, id) => {
            getPetNamesById.push(`Pet Name: ${pet.name} ID #: ${id}`);
        })
        return getPetNamesById;
    }
    adoptPet(id) {
        this.pets.delete(id)
    }
};

module.exports = Shelter;
 