const Pet = require('./Pet');

class OrganicPet extends Pet {
    constructor(name="Jessica", id) {
        super(name, id);
    }
}

module.exports = OrganicPet;