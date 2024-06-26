// Demonstrates using console.log() inside a loop to track 
// variable values
for (var i_1 = 1; i_1 <= 5; i_1++) {
    console.log("Iteration ".concat(i_1, ", i value:, i"));
    // Logs the current iteration number and the value of i
}
var i = 1;
while (i <= 5) {
    console.log("Iteration ".concat(i, ", i value:, i"));
    i++;
}
// This loop iterates five times, logging the value of 'i'
//  during each iteration to help with debugging.
