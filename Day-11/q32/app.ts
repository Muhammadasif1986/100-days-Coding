// Question 32: Checking Usernames: Ensure uniqueness in usernames.

//Example of .some()
// let numbers = [1, 2, 3, 4, 5];
// let hasEvenNumber = numbers.some(number => number % 2 === 0);
// console.log(hasEvenNumber);
//print true


let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

//1st Method
new_users.forEach(newuser => {
    if(current_users.some(currentuser => currentuser.toLowerCase() === newuser.toLowerCase())){
        console.log(`${newuser} will need to enter a new username.`);
    }
    else{
        console.log(`${newuser} is available.`);   
    }

})
   
//2nd Method
for(let newuser of new_users){
    let newUserlowercase = newuser.toLowerCase();
    if(current_users.some(currentuser => currentuser.toLowerCase() === newUserlowercase)){
        console.log(`${newuser} will need to enter a new username.`);
    }
    else{
        console.log(`${newuser} is available.`);   
    }
}

// 3rd Method
for(let newuser of new_users){
    let newUserlowercase = newuser.toLowerCase();
    if(current_users.map(currentuser => currentuser.toLowerCase()).includes(newUserlowercase)){
        console.log(`${newuser} will need to enter a new username.`);
    }
    else{
        console.log(`${newuser} is available.`);   
    }
}
    




