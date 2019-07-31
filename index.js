const bubbleSort = require('./bubble-sort');

let setOfNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let i, j, temp;

console.log('The set of numbers = ', setOfNumbers);

bubbleSort(setOfNumbers);
  
console.log('The sorted set of numbers = ', setOfNumbers);
