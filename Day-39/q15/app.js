// Question 115: Use a switch statement to log the days of the week 
// based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code 
// blocks to be executed. It's particularly useful for scenarios like mapping 
// numbers to days of the week.
var day = 6;
var dayName;
switch (day) {
    case 1:
        dayName = "sunday";
        break;
    case 2:
        dayName = "monday";
        break;
    case 3:
        dayName = "tuesday";
        break;
    case 4:
        dayName = "wednesday";
        break;
    case 5:
        dayName = "thursday";
        break;
    case 6:
        dayName = "friday";
        break;
    case 7:
        dayName = "saturday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log(dayName);
var logDays = function (day) {
    var dayName;
    switch (day) {
        case 1:
            dayName = "sunday";
            break;
        case 2:
            dayName = "monday";
            break;
        case 3:
            dayName = "tuesday";
            break;
        case 4:
            dayName = "wednesday";
            break;
        case 5:
            dayName = "thursday";
            break;
        case 6:
            dayName = "friday";
            break;
        case 7:
            dayName = "saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
};
console.log(logDays(3));
console.log(logDays(4));
console.log(logDays(5));
console.log(logDays(6));
console.log(logDays(8));
