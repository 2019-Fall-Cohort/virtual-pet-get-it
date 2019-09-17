const Pet = require('./Pet');

class OrganicPet extends Pet {
    constructor(name, id) {
        super(name, id);
    }
}

module.exports = OrganicPet;