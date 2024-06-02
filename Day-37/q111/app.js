// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance,
//  you might consider anyone under 13 a child, between 13 and 19 a teenager,
//   and 20 or older an adult.
let ageGroup = (age) => {
    if (age < 13) {
        return "child";
    }
    else if (age >= 13 && age <= 19) {
        return "teenager";
    }
    else {
        return "Adult";
    }
};
console.log(ageGroup(12));
console.log(ageGroup(15));
console.log(ageGroup(19));
console.log(ageGroup(20));
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values.
//  Add three countries to the Map.
// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original 
// insertion order of the keys. It can be more efficient for large sets of data and when the key
//  is not a string.
let countryCapital = new Map();
countryCapital.set("USA", "Washington, D.C."); // Adds USA to the Map
countryCapital.set("France", "Paris"); // Adds France to the Map
// countryCapital.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countryCapital);
