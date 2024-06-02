// Question 121: Implement a for loop that counts from 1 to 10 but skips number
//  5 using the continue statement.

// Explain & TIP: The continue statement can be used to skip over an iteration in a loop.
//  It's particularly handy when you want to ignore specific cases without stopping the entire loop
function skipFive() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue; // Skip the iteration when i is 5
    }
    console.log(i);
  }
}
skipFive()


function skip() {
      for (let i = 10; i > 0; i--) {
        if (i === 5) {
          continue; // Skip the iteration when i is 5
        }
        console.log(i);
      }
    }
    skip()