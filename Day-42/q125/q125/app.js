// Question 125: Modify a method in an object to use the this keyword to access another
//  property in the same object.
var myObject = {
    name: "John Doe",
    age: 30,
    getName: function () {
        return this.age;
    }
};
console.log(myObject.getName());
