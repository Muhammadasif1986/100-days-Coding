// Reserved word: let - used to declare a block-scoped 
// local variable
var car = "Civic";
// Reserved word: if - used to execute a block of code
//  if a specified condition is true
if (car == "Civic") {
    console.log("My car name is ", car);
}
// Reserved word: return - used to exit a function and
// return a value from that function
function MyCar() {
    return car;
}
console.log(MyCar());
// Demonstrates valid use cases for the reserved 
// words 'let', 'if', and 'return'.
