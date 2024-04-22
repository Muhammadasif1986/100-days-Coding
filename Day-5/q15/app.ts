// Question 15: Changing Guest List: One of your guests can't
//  make it to the dinner, so you need to send out a new set of 
//  invitations with a replacement guest.

let guestLists:string[]=["Fazal","Mansoor","khalid"];

let addGuest= "Imran";
let absentGuest = "Mansoor";

// guestLists[1]=addGuest;
guestLists[guestLists.indexOf(absentGuest)] = addGuest;

guestLists.forEach(guest =>{
    console.log(`Dear ${guest} Sahab your inviting to dinner.`);

})

console.log(`${absentGuest} sahab is not attend dinner`);
