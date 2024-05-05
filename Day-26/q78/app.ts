// Question 78: Function Expressions vs. Function Declarations:
//  Compare function expressions and declarations by creating one
//   of each that performs the same task, such as squaring a number.

// Function declaration for squaring a number
function squareDeclaration(number: number): number {
    return number * number;
}

// Function expression for squaring a number
const squareExpression = function(number: number): number {
    return number * number;
};

// Using both functions to square the number 4
console.log(squareDeclaration(4)); // Outputs: 16
console.log(squareExpression(4)); // Outputs: 16
// Both methods give us the same result, showing two different ways to create functions that do the same thing.


function no1(number:number):number{  // Declaration
return number*number;
}

const no2 =  function(number:number):number{ // Expression
    return number*number;
    }

    console.log(no1(2));
    console.log(no2(2));
    


