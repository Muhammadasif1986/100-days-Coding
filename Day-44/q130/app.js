"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Muliply = void 0;
var Muliply = function () {
    var Num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Num[_i] = arguments[_i];
    }
    return Num.reduce(function (a, b) { return a * b; }, 1);
};
exports.Muliply = Muliply;
console.log((0, exports.Muliply)(5, 5, 5));
