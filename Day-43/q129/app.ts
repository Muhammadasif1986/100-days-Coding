// Demonstrating 'this' in traditional vs. arrow functions
const tradVSarr = {
  value: "Traditional Value",
  tradFunction: function () {
    console.log("Traditional function:", this.value);
    //'this' refers to tradVSarr object Traditional function
  },
  arrowFunction: () => {
    console.log("Arrow function:", this.value);
    // 'this' not refer tradVSarr object in arrow function
  },
};
tradVSarr.tradFunction();
tradVSarr.arrowFunction();

const outerScope = {
  value: "outerScope value",
  TraditionalFun: function () {
    console.log("Traditional function in outerScope:", this.value);
    const innerObject = {
      innerValue: "innerObject value",
      arrowFun: () => {
        console.log("Arrow function in innerObject:", this.value); // print outerScope/parent object value;
        console.log("Arrow function in innerObject:", this.innerValue); // print undefined due to same object
      },
    };
    innerObject.arrowFun();//call arrow function
  },
};

outerScope.TraditionalFun(); // Logs "Arrow function in innerObject: outerScope value"
