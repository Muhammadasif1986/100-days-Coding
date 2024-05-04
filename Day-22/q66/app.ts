// Question 66: Logical AND Verification: Create a function that checks two boolean
//  (true or false) values. It should only say true if both are true, using the && operator.
//   For instance, checkBothTrue(true, false) should be false.


// using && operator
// This function sees if both inputs are true
function BothTrue(val1: boolean, val2: boolean): boolean {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}

// Trying it with true and false
console.log(BothTrue(true, false)); // Shows false
console.log(BothTrue(true, true)); // Shows True
// It checks two things, but since one is false, the answer is false.




//Using || operator
// This function sees if both inputs are true
function BothTrue1(val1: boolean, val2: boolean): boolean {
    // Only says true if each 1 val1  are true
    return val1 || val2;
}

// Trying it with true and false
console.log(BothTrue1(false, false)); // Shows false
console.log(BothTrue1(true, false)); // Shows True
// It checks two things, but since one is false, the answer is false.