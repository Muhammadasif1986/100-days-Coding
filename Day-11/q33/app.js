// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var num = number_1[_i];
    var suffix = void 0;
    if (num == 1) {
        suffix = 'st';
    }
    else if (num == 2) {
        suffix = 'nd';
    }
    else if (num == 3) {
        suffix = 'rd';
    }
    else {
        suffix = 'th';
    }
    console.log("".concat(num).concat(suffix));
}
