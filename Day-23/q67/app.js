// Question 67: Arithmetic with Mixed Types: Write a function 
// that takes two parameters: a number and a string that represents 
// a number (e.g., "5"). Return their sum as a number. 
function AddNumString(number1, StringNumber) {
    return number1 + Number(StringNumber);
    //             ______  using Number I
}
console.log(AddNumString(15, "5"));
