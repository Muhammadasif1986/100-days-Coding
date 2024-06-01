// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), 
// you can convert both strings to the same case before comparing.

let compareStr = (str1:string,str2:string):boolean=> {

      return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareStr("asif", "Asif"));
console.log(compareStr("Ayaz", "Asif"));