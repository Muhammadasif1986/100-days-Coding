// Question 87: Extracting a Substring: 
// Demonstrate how to extract the first 10 characters from a string.

// This function takes out the first 10 characters from any text
function extractFirstTenChars(str: string): string {
    return str.substring(0, 10); // Gets characters from start to position 10
}

// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, JavaScript world!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.


// trying
let extract=(str:string):string=>{

    let extract10 = str.substring(0,15);
return extract10;
}

console.log(extract("i am learning typescript ")); // prin on 15 word 
