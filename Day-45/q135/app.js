// Question 135
// Explain how you can format a JSON string with proper indentation for readability.
var detail = {
    name: "asif",
    age: 38,
    city: "karachi"
};
var detailJson = JSON.stringify(detail, null, 3); // convert to json with white space
console.log(detail);
console.log(detailJson);
