// Question 11: Names: Store the names of a few of your friends
//  in an array called names. Print each person’s name by accessing
//   each element in the list, one at a time.


let Friend_name:string[] = ["Amir","Sultan","Naveed","Nouman","Ali"];
for(let friendList of Friend_name ){
    console.log(friendList);
}

for(let list = 0; list < Friend_name.length;  list++){
    console.log(Friend_name[list]);
    
}