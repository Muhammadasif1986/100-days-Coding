// Question 64: Combine Strings and Numbers: Write a function that merges
//  a piece of text with a number. For example, if provided with "Age: "
//   and 30, it should give back "Age: 30".

// This function mixes a text and a number into one text
function TextAndNumber(text: string, number: number,name:string):string {
    // Joins the text and number into a single text
    return text + number+name;
}

// Trying it out with "Age: " and 30
console.log(TextAndNumber("Age: ", 30," Asif")); // Shows "Age: 30"
// Here, we put together the text and number.
