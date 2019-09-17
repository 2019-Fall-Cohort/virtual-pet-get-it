const OrganicPet = require('./OrganicPet');

describe("OrganicPet", () => {
    // Arrange
    const underTest = new OrganicPet(id = 1);
    describe("renamePet", () => {
        test('should change name property to "Jessika"', () => {
            // Arrange
            let currentName = underTest.name;
            // Act
            underTest.renamePet;
            // Assert
            expect(currentName).toBe("Jessica");
            expect(underTest.name).toBe("Jessika");
            console.log(underTest);
        });
    });
});