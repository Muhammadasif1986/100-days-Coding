"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
var student = /** @class */ (function () {
    function student(name, id) {
        this.name = name;
        this.id = id;
    }
    student.prototype.greet = function () {
        console.log("Hello, Student name is ".concat(this.name, " and id is ").concat(this.id));
    };
    ;
    return student;
}());
exports.student = student;
