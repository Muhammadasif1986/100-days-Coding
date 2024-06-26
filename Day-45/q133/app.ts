
// Defines a JavaScript object
// interface Keys{
//       "name": string,
//       "age": number,
//       "city": string,
//       "feesPaid": boolean
// }
interface Keys{
      name: string,
      age: number,
      city: string,
      feesPaid: boolean
}

const person:Keys = {
      name: "Alice",
      age: 40,
      city: "Wonderland",
      feesPaid:true
    };

     let Details: Keys = {
      "name": "asif",
      "age": 30,
      "city": "Karachi",
      "feesPaid":false
    } 

    let jsonPer = '{"name":"Asif", "age": "30"}'
    console.log(jsonPer);
    
//     console.log(person);
    
//     console.log(Details);
    
    // Converts the object into a JSON string
   let personJson = JSON.stringify(person,) 
   let DetailJson = JSON.stringify(Details)
    console.log(personJson);
      
    console.log(DetailJson); 
    // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
    // Demonstrates converting an object to a JSON string,
    //  making it easy to store or transmit.
    
                  