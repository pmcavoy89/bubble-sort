function bubbleSort(setOfNumbers) {
    let outerIndexKeeper, innerIndexKeeper, theSwappingValue;
    const sortedSetOfNumbers = Object.assign([], setOfNumbers);

    for (outerIndexKeeper = 0; outerIndexKeeper < setOfNumbers.length - 1; outerIndexKeeper++) {
        for (innerIndexKeeper = 0; innerIndexKeeper < sortedSetOfNumbers.length - outerIndexKeeper - 1; innerIndexKeeper++) {
            if(sortedSetOfNumbers[innerIndexKeeper] > sortedSetOfNumbers[innerIndexKeeper+1]) {
                theSwappingValue = sortedSetOfNumbers[innerIndexKeeper];
                sortedSetOfNumbers[innerIndexKeeper] = sortedSetOfNumbers[innerIndexKeeper+1];
                sortedSetOfNumbers[innerIndexKeeper+1] = theSwappingValue; 
            }
        }
    }

    return sortedSetOfNumbers;
}

module.exports = bubbleSort;
