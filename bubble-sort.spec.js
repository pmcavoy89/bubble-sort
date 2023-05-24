const bubbleSort = require('./bubble-sort');

describe('bubble-sort', () => {
    it('should sort numbers into ascending order', () => {
        // Arrange
        const setOfNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedSetOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Act
        const results = bubbleSort(setOfNumbers);

        // Assert
        expect(results).toEqual(sortedSetOfNumbers);
    });
    
    it('swap correctly when a number is bigger later on', () => {
        // Arrange
        const setOfNumbers = [10, 9, 11, 7, 6, 5, 4, 3, 2, 1];
        const sortedSetOfNumbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];

        // Act
        const results = bubbleSort(setOfNumbers);

        // Assert
        expect(results).toEqual(sortedSetOfNumbers);
    });
});