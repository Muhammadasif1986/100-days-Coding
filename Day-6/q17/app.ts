// Question 17: Shrinking Guest List: Unfortunately, 
// your new table won’t arrive in time, 
// and you can only invite two guests.

let guestLists:string[]=["Fazal","Mansoor","khalid"];

let addGuest:string= "Imran";
let absentGuest:string = "Mansoor";

// guestLists[1]=addGuest;
guestLists[guestLists.indexOf(absentGuest)] = addGuest;

guestLists.unshift("Abdul Qadir");
//guestLists.splice(2,0,"Yousuf");
guestLists.splice(guestLists.length / 2, 0, "Yousuf");
guestLists.push("Abdul Ghaffar");

console.log("Unfortunately, I can only invite two people for dinner.");

while(guestLists.length > 2){
    let removeGuest = guestLists.pop()
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}

guestLists.forEach(guest =>{
    console.log(`Dear ${guest} Sahab your inviting to dinner.`);
})

guestLists.splice(0,guestLists.length);
//guestLists.splice(0,5,)

console.log(guestLists);
