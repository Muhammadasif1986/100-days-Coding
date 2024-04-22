// Question 12: Greetings: Use the array from Exercise 11. 
// Instead of just printing each person’s name, print a message to them.
//  The message should be the same for each person, 
//  but personalized with their name.

let Friend_name1:string[] = ["Amir","Sultan","Naveed","Nouman","Ali"];
 for(let list1 of Friend_name1){
    console.log(`${list1} are attending Governor sindh IT Classes`); 
 }

 for(let i=0; i < Friend_name1.length; i++){
    console.log(Friend_name1[i], "are attending Governor sindh IT Classes");
    
 }