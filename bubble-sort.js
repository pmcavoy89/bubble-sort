function bubbleSort(setOfNumbers) {
    let outerIndexKeeper, innerIndexKeeper, theSwappingValue;

    for (outerIndexKeeper = 0; outerIndexKeeper < setOfNumbers.length - 1; outerIndexKeeper++) {

        for (innerIndexKeeper = 0; innerIndexKeeper < setOfNumbers.length - outerIndexKeeper - 1; innerIndexKeeper++) {
            if(setOfNumbers[innerIndexKeeper] > setOfNumbers[innerIndexKeeper+1]) {
                theSwappingValue = setOfNumbers[innerIndexKeeper];
                setOfNumbers[innerIndexKeeper] = setOfNumbers[innerIndexKeeper+1];
                setOfNumbers[innerIndexKeeper+1] = theSwappingValue; 
            }
        }
    }
}

module.exports = bubbleSort;
