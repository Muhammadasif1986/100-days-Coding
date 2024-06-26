var person = {
    name: "Alice",
    age: 40,
    city: "Wonderland",
    feesPaid: true
};
var Details = {
    "name": "asif",
    "age": 30,
    "city": "Karachi",
    "feesPaid": false
};
var jsonPer = '{"name":"Asif", "age": "30"}';
console.log(jsonPer);
//     console.log(person);
//     console.log(Details);
// Converts the object into a JSON string
var personJson = JSON.stringify(person);
var DetailJson = JSON.stringify(Details);
console.log(personJson);
console.log(DetailJson);
// Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// Demonstrates converting an object to a JSON string,
//  making it easy to store or transmit.
