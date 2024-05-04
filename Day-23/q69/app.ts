// Question 69: Dividing and Finding the Remainder: Write a
// function that divides two numbers and returns both the quotient
//  and the remainder. Use an object to return both values.

// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(
  dividend: number,
  divisor: number
): { quotient: number; remainder: number } {
  // Calculates the quotient and remainder
  let quotient = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  // Returns both in an object
  return { quotient, remainder };
}

// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.


// Trying
function dividRemainder(
  first: number,
  second: number
): { roundDown: number; remainder: number } {
  let roundDown = Math.floor(first / second);
  let remainder = first % second;
  return { roundDown, remainder };
}

console.log(dividRemainder(11, 3)); // divide round Downside Ans 3
// reminder Ans 2
