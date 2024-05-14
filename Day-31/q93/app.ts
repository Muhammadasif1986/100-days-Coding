// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
const fruits: string[] = ["Apple","lichee" ,"Cherry","Banana"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', "lichee','Cherry','Mango']
// We're swapping "Banana" for "Mango" in our fruit list.

// trying with arrow function
//Replace Lahore to Karachi
let replace = (city:string[]):string[] =>{
    const indexCity = city.indexOf("Lahore") 
    if (indexCity !== -1) {
        city[indexCity] = "Karachi" 
}
return city
}
const CityName:string[]=["Islamabad","Lahore","Sakkhar"];
replace(CityName);
console.log(CityName);





