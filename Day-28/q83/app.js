// Question 83: Converting to Upper and Lower Case:
//  Create a function that takes a string, converts it to uppercase,
//   then to lowercase, and logs both.
// This function changes a string to uppercase and then to lowercase
function convertCase(str) {
    var upperStr = str.toUpperCase(); // Converts to uppercase
    var lowerStr = str.toLowerCase(); // Converts to lowercase
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
// Example: Changing the case of "Hello World"
convertCase("Hello World\n"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
convertCase("My House\n"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
// We're showing the same text in all uppercase and then all lowercase.
