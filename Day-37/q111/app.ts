// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance,
//  you might consider anyone under 13 a child, between 13 and 19 a teenager,
//   and 20 or older an adult.

let ageGroup = (age:number):string =>{
      if(age < 13){
return "child"
      } 
      else if(age >= 13 && age <= 19){
        return "teenager"
      }
      else{
            return "Adult"
      }
}

console.log(ageGroup(12));
console.log(ageGroup(15));
console.log(ageGroup(19));
console.log(ageGroup(20));

