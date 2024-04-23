// Question 19: Dinner Guests: Use one of your programs from 
//  14 through 18 to print a message indicating the number 
//  of people you are inviting to dinner.
var guestLists = ["Fazal", "Mansoor", "khalid"];
var addGuest = "Imran";
var absentGuest = "Mansoor";
// guestLists[1]=addGuest;
guestLists[guestLists.indexOf(absentGuest)] = addGuest;
guestLists.unshift("Abdul Qadir");
//guestLists.splice(2,0,"Yousuf");
guestLists.splice(guestLists.length / 2, 0, "Yousuf");
guestLists.push("Abdul Ghaffar");
var newLocal = " People to dinner.";
console.log("I am inviting ", guestLists.length + " people to dinner.");
