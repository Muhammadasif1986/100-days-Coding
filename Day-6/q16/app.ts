// Question 16: More Guests: You've found a bigger dinner table,
//  so there's room for more guests.

let guestLists:string[]=["Fazal","Mansoor","khalid"];

let addGuest:string= "Imran";
let absentGuest:string = "Mansoor";

// guestLists[1]=addGuest;
guestLists[guestLists.indexOf(absentGuest)] = addGuest;

guestLists.unshift("Abdul Qadir");
//guestLists.splice(2,0,"Yousuf");
guestLists.splice(guestLists.length / 2, 0, "Yousuf");
guestLists.push("Abdul Ghaffar");

guestLists.forEach(guest =>{
    console.log(`Dear ${guest} Sahab your inviting to dinner.`);

})

console.log(`${absentGuest} sahab is not attend dinner`);