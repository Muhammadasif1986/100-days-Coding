// Question 95: Write a function that uses the .filter() 
// method to return an array of numbers greater than 10.

let lessThan = (num:number[]):number[]=>{
    return num.filter(number=>number <= 10)
}
const numberless10:number[]=[2,3,4,5,6,7,8,9,10,11,22,33,44,1,13,]
console.log(lessThan(numberless10));



// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

// Example: Filtering an array of numbers
const numbers: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); // Outputs: [15, 20, 25]
// The new array contains only the numbers that are greater than 10.