
// Question 135
// Explain how you can format a JSON string with proper indentation for readability.

let detail ={
      name: "asif",
      age: 38,
      city: "karachi"
}

let detailJson = JSON.stringify(detail, null , 3) // convert to json with white space
console.log(detail);

console.log(detailJson);
