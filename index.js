let setOfNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let i, j, temp;

console.log('The set of numbers = ', setOfNumbers);

for (i = 0; i < setOfNumbers.length - 1; i++) {
    for (j = 0; j < setOfNumbers.length - i - 1; j++) {
        if(setOfNumbers[j] > setOfNumbers[j+1]) {
            temp = setOfNumbers[j];
            setOfNumbers[j] = setOfNumbers[j+1];
            setOfNumbers[j+1] = temp; 
        }
    }
    console.log('The sorted set after ', i+1, ' passes = ', setOfNumbers);

}
  
console.log('The sorted set of numbers = ', setOfNumbers);
