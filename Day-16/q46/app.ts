// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,
//  model, year, and a method describe() that logs a sentence about the laptop.

let laptop={
    Make: "HP",
Model:"HP core i7",
year: 2022,
Describe: function(){
    console.log(`${this.Make}, ${this.Model}, ${this.year}`);
    
}

}

laptop.Describe()