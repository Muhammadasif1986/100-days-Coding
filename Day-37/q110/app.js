// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on
//  a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges.
//  You can use an if-else-if chain to determine the grade.
var assignsGrade = function (Marks) {
    var TotalMarks = 850;
    if (Marks / TotalMarks * 100 >= 90) {
        console.log("\"A\" Grade");
    }
    else if (Marks / TotalMarks * 100 >= 80) {
        console.log("\"B\" Grade");
    }
    else if (Marks / TotalMarks * 100 >= 70) {
        console.log("\"C\" Grade");
    }
    else if (Marks / TotalMarks * 100 >= 60) {
        console.log("\"D\" Grade");
    }
    else {
        console.log("\"F\" Fail");
    }
};
assignsGrade(500); // "A" Grade
assignsGrade(650); // "A" Grade
assignsGrade(750); // "A" Grade
// let marks =750;
// let TotalMarks= 850
// marks/TotalMarks*100;
// let grade:string="A"
//  switch (marks) {
//       case  90:
//       case 100:
//       grade="A"
//         break;
//         case 80:
//             grade="B"
//             break;
//             case 70:
//                   grade="C"
//                   break;
//                   case 60:
//                         grade="D"
//                         break; 
//       default:throw Error("not define");
// }
// console.log(`your Grade is ${grade}`);
