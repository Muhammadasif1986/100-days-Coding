// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
//  each with properties make, model,
//  and year, use array destructuring to assign the first and second laptops to variables.
//   Then, log these variables.
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
var DELL = laptops[0], Apple = laptops[1], HP = laptops[2];
console.log(DELL);
console.log(Apple);
console.log(HP);
