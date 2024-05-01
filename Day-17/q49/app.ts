// Question 49: Function with Rest Parameters: Write a function 
// that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.
function MyHobbies(...hobbies:String[]){
    hobbies.forEach(hobby => {
        console.log(`I Enjoy ${hobby}`);  
    });

}

MyHobbies("Reading","writing","Coding")

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