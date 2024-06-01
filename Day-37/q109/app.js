// Question 109: Write an if statement that logs "Good Morning" if the current time is before
//  12 PM.
// Explain & TIP: You can get the current hour using the Date object and its getHours() method.
//  Remember, hours are in 24-hour format, so 12 PM is 12.
var crntTime = new Date();
console.log(crntTime);
var hour = crntTime.getHours();
console.log(hour);
if (hour < 12) {
    console.log("Good Morning");
}
