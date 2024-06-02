// Question 113: Write a function that checks if a Map contains a key for "Canada" 
// and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has()
//  method and retrieve its value with the .get() method.


const countryCapitals = new Map();
countryCapitals.set("United States", "Washington D.C.");
countryCapitals.set("Canada", "Ottawa");
countryCapitals.set("Mexico", "Mexico City");
countryCapitals.set("Pakistan", "Islamabad");

let countries =(countryCapitals:Map<string,string>):void => {
      if(countryCapitals.has("Pakistan")){
        console.log("The capital of Pakistan is " + countryCapitals.get("Pakistan"));
      }else{
        console.log("No data found");
      }
}

countries(countryCapitals)
