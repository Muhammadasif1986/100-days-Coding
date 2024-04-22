// Question 13: Your Own Array: Think of your favorite mode of
//  transportation, such as a motorcycle or a car, and make 
//  a list that stores several examples. Use your list to
//   print a series of statements about these items, such as
//    “I would like to own a Honda motorcycle.”


let transports:string[]=["suzuki 150","Suzuki Alto","Audi A8"]
transports.forEach(transport =>{
    console.log(`I would like to own a ${transport}\n`);
    
})

for(let transport1 of transports){
    console.log("I would like to own a \n" + transport1);
    
}

for(let i=0; i<transports.length; i++){
    console.log("\nI would like to own a " , transports[i]);
    
}