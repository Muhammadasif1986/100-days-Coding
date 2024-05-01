// Question 49: Function with Rest Parameters: Write a function 
// that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.
function MyHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I Enjoy ".concat(hobby));
    });
}
MyHobbies("Reading", "writing", "Coding");
// Defines a function that accepts multiple hobbies as arguments
// function logHobbies(...hobbies: string[]) {
// Loops through each hobby in the array
// hobbies.forEach(hobby => {
// Logs a statement for each hobby
//         console.log(`I enjoy ${hobby}.`);
//     });
// }
// // Calls the function with three hobbies
// logHobbies("reading", "coding", "cycling");
