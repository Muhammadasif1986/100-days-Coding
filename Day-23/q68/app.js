// Question 68: Multiplying Decimals: Create a function that accepts two 
// decimal numbers and returns their product. Round the result to two decimal places.
// This function multiplies two decimal numbers
function multiplyDecimals(num1, num2) {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying, we round to make the result easier to read.
function multiDecimal(num1, num2) {
    return Math.round((num1 / num2) * 100) / 100;
}
console.log(multiDecimal(11, 3)); //Actual Ans 3.66  but using Math.round Ans 3.67 
