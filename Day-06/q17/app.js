// Question 17: Shrinking Guest List: Unfortunately, 
// your new table won’t arrive in time, 
// and you can only invite two guests.
var guestLists = ["Fazal", "Mansoor", "khalid"];
var addGuest = "Imran";
var absentGuest = "Mansoor";
// guestLists[1]=addGuest;
guestLists[guestLists.indexOf(absentGuest)] = addGuest;
guestLists.unshift("Abdul Qadir");
//guestLists.splice(2,0,"Yousuf");
guestLists.splice(guestLists.length / 2, 0, "Yousuf");
guestLists.push("Abdul Ghaffar");
console.log("Unfortunately, I can only invite two people for dinner.");
while (guestLists.length > 2) {
    var removeGuest = guestLists.pop();
    console.log("Sorry, ".concat(removeGuest, ", I can't invite you to dinner."));
}
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, " Sahab your inviting to dinner."));
});
guestLists.splice(0, guestLists.length);
//guestLists.splice(0,5,)
console.log(guestLists);
