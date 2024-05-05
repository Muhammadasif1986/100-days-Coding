// Question 88: Rounding to the Nearest Integer: 
// Write a function that takes a decimal number as input
//  and returns the number rounded to the nearest integer.


// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num: number): number {
    return Math.round(num); // Rounds the number
}

// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); // Outputs: 5
console.log(roundToNearestInteger(4.4)); // Outputs: 4
// This shows how the function rounds numbers either up or down.


// trying

let roundNumber =(num:number):number=>{
let numbers = Math.round(num)
return numbers

}

console.log(roundNumber(4.62));
console.log(roundNumber(4.4));


