// Question 15: Changing Guest List: One of your guests can't
//  make it to the dinner, so you need to send out a new set of 
//  invitations with a replacement guest.
var guestLists = ["Fazal", "Mansoor", "khalid"];
var addGuest = "Imran";
var absentGuest = "Mansoor";
// guestLists[1]=addGuest;
guestLists[guestLists.indexOf(absentGuest)] = addGuest;
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, " Sahab your inviting to dinner."));
});
console.log("".concat(absentGuest, " sahab is not attend dinner"));
