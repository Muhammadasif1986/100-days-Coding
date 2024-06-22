var _this = this;
// Demonstrating 'this' in traditional vs. arrow functions
var tradVSarr = {
    value: "Traditional Value",
    tradFunction: function () {
        console.log("Traditional function:", this.value);
        //'this' refers to tradVSarr object Traditional function
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
        // 'this' not refer tradVSarr object in arrow function
    },
};
tradVSarr.tradFunction();
tradVSarr.arrowFunction();
var outerScope = {
    value: "outerScope value",
    TraditionalFun: function () {
        var _this = this;
        console.log("Traditional function in outerScope:", this.value);
        var innerObject = {
            innerValue: "innerObject value",
            arrowFun: function () {
                console.log("Arrow function in innerObject:", _this.value); // print outerScope value;
                console.log("Arrow function in innerObject:", _this.innerValue); // print undefined
            },
        };
        innerObject.arrowFun();
    },
};
outerScope.TraditionalFun(); // Logs "Arrow function in innerObject: outerScope value"
