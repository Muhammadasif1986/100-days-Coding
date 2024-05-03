// // Question 58: Average Score Calculator: Write a simple program 
// // that can take lots of scores and find their average.
// // This program calculates the average of all scores given
// function averageScore(...scores: number[]): number {
//     // Adds all scores together and divides by the number of scores
//     let total = scores.reduce((sum, score) => sum + score, 0);
//     return total / scores.length;
// }
// // Example: finding the average of four scores
// console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// // We add up all the scores, then divide by how many there are.
var average = function () {
    var score1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score1[_i] = arguments[_i];
    }
    var total1 = score1.reduce(function (sum, score) { return sum + score; }, 0);
    return total1 / score1.length;
};
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//example 2
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (sum, numbers) { return sum + numbers; }, 0) / numbers.length; // 15
console.log(sum);
