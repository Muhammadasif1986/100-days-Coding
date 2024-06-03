// Question 125: Modify a method in an object to use the this keyword to access another
//  property in the same object.

// Explain & TIP: You can leverage the this keyword to interact with multiple properties
//  within the same object, providing a cohesive way to manipulate internal data.

interface myObject {
      name:string,
      getName:()=>string | number
}

let myObject = {
  name: "John Doe",
  age: 30,
  getName: function() {
    return this.age;
  }
};

console.log(myObject.getName());