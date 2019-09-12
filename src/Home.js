const Cages = require('./Cages');
const Pet = require('./Pet');

class Home {
    constructor(userName) {
        this.userName = userName;
        this.pets = [];
        this.
        this.cage = new Cages;
    }
    getPetNames() {
        const petNames = [];
        this.Home.forEach((x) => {
            petNames.push(x.name);
        })
    }
}

