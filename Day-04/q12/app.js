// Question 12: Greetings: Use the array from Exercise 11. 
// Instead of just printing each person’s name, print a message to them.
//  The message should be the same for each person, 
//  but personalized with their name.
var Friend_name1 = ["Amir", "Sultan", "Naveed", "Nouman", "Ali"];
for (var _i = 0, Friend_name1_1 = Friend_name1; _i < Friend_name1_1.length; _i++) {
    var list1 = Friend_name1_1[_i];
    console.log("".concat(list1, " are attending Governor sindh IT Classes"));
}
for (var i = 0; i < Friend_name1.length; i++) {
    console.log(Friend_name1[i], "are attending Governor sindh IT Classes");
}
