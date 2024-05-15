
// Question 96: Demonstrate how to use the .reduce() method to calculate 
// the sum of all numbers in an array.

let sum = (numbers:number[]):number =>{
    return numbers.reduce((previous , current) => previous + current,0)
}

let arrSum:number[]=[1,3,5,7,9];
console.log(sum(arrSum));



// This function calculates the sum of all numbers in an array
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Example: Calculating the sum of an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.
