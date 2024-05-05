// Question 90: Checking if a Value is NaN: 
// Demonstrate how to check if a variable's value is 
// NaN (Not a Number) and return a boolean result.


// This function checks if a value is Not a Number (NaN)
function isValueNaN(value: any): boolean {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}

// Examples: Checking different values
console.log(isValueNaN("hello")); // Outputs: true, because "hello" isn't a number
console.log(isValueNaN(123)); // Outputs: false, because 123 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.

// Trying

let ValueNaN=(value:any):boolean=>{
    let valueCheck = isNaN(value);
    return valueCheck
}

console.log(ValueNaN("Asif"));
console.log(ValueNaN(false));
console.log(ValueNaN(true));
console.log(ValueNaN(19));
