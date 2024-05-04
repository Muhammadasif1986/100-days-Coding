// Question 72: Block Scope with let and const: Demonstrate 
// block scope by creating a code block with {} that uses both 
// let and const. Show how variables declared inside the block
//  are not accessible outside of it.

// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}

try {
    console.log(blockLet); // This will fail
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(blockConst); // This will also fail
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.



// Trying function
function block(){

    let letBlock = "visible inside the function"
    const constBlock = "also only inside the block";

   console.log(`${letBlock} \n ${constBlock}}`);
   
}

block()

console.log(`${letBlock} \n ${constBlock}}`); // this will failed due to out of function


