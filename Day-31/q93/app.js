// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1)
        fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
var fruits = ["Apple", "lichee", "Cherry", "Banana"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', "lichee','Cherry','Mango']
// We're swapping "Banana" for "Mango" in our fruit list.
// trying with arrow function
//Replace Lahore to Karachi
var replace = function (city) {
    var indexCity = city.indexOf("Lahore");
    if (indexCity !== -1) {
        city[indexCity] = "Karachi";
    }
    return city;
};
var CityName = ["Islamabad", "Lahore", "Sakkhar"];
replace(CityName);
console.log(CityName);
