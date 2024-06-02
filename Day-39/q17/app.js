// Question 117: Implement a switch statement that evaluates an expression and uses
//  the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute
//  a block of code when none of the other case labels match the expression's value.
function logGrade(grade) {
    switch (grade) {
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('Satisfactory');
            break;
        case 'C':
            console.log('Average');
        default:
            console.log('Bad');
            break;
    }
}
logGrade('A');
// Example usage
