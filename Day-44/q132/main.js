"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.two = exports.one = exports.Bike = void 0;
var Bike = /** @class */ (function () {
    function Bike() {
        this.name = "honda";
        this.color = "black";
        this.model = 2022;
    }
    return Bike;
}());
exports.Bike = Bike;
var one = function () { return 1 + 1; };
exports.one = one;
var two = function () { return 2 + 2; };
exports.two = two;
