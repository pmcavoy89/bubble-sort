function bubbleSort(setOfNumbers) {
    for (i = 0; i < setOfNumbers.length - 1; i++) {
        for (j = 0; j < setOfNumbers.length - i - 1; j++) {
            if(setOfNumbers[j] > setOfNumbers[j+1]) {
                temp = setOfNumbers[j];
                setOfNumbers[j] = setOfNumbers[j+1];
                setOfNumbers[j+1] = temp; 
            }
        }
    }
}

module.exports = bubbleSort;
