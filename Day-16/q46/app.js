// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,
//  model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    Make: "HP",
    Model: "HP core i7",
    year: 2022,
    Describe: function () {
        console.log("".concat(this.Make, ", ").concat(this.Model, ", ").concat(this.year));
    }
};
laptop.Describe();
