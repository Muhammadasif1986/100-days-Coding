// Arrow function that calculates the all its parameters
var SumProduct = function () {
    var Product = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Product[_i] = arguments[_i];
    }
    return Product.reduce(function (Total, Sum) { return Total + Sum; }, 0);
};
console.log(SumProduct(2, 4, 6, 8)); // out put 20
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
