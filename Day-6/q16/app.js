// Question 16: More Guests: You've found a bigger dinner table,
//  so there's room for more guests.
var guestLists = ["Fazal", "Mansoor", "khalid"];
var addGuest = "Imran";
var absentGuest = "Mansoor";
// guestLists[1]=addGuest;
guestLists[guestLists.indexOf(absentGuest)] = addGuest;
guestLists.unshift("Abdul Qadir");
//guestLists.splice(2,0,"Yousuf");
guestLists.splice(guestLists.length / 2, 0, "Yousuf");
guestLists.push("Abdul Ghaffar");
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, " Sahab your inviting to dinner."));
});
console.log("".concat(absentGuest, " sahab is not attend dinner"));
