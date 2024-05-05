// Question 81: Iterating Over Object Properties:
//  Write a function that takes an object as an argument and logs
//   all of its properties and values.
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (var property in obj) {
        // Loops through each property in the object
        console.log("".concat(property, ": ").concat(obj[property]));
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2023, color: "blue" });
// It tells us each piece of information stored about the car.
// trying
var logObject = function (key) {
    for (var properties in key) {
        console.log("".concat(properties, "; ").concat(key[properties]));
    }
};
logObject({ model: "honda", year: 2024, vehicleName: "car" });
