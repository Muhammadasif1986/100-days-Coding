// Question 86: Checking for Text Presence: 
// Create a function that checks if the word "JavaScript" is present
//  in a given string. It should return true if found, otherwise false.

// This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
}

// Example: Seeing if a text mentions JavaScript
console.log(hasJavaScript("I love coding in JavaScript!")); // Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.


// trying

let checkWord =(str:string)=>{
    let foundWord = str.includes("sleep");
    return foundWord

}

console.log(checkWord("doctor suggest must sleep 6-8 hours a day"));
console.log(checkWord("doctor suggest must SLEEP 6-8 hours a day")); // using upper case Ans false


