// Question 99: Generate a date object representing your next birthday
//  and log it to the console.

const birthDay=(day: number, month: number):Date =>{
    let date = new Date();
    console.log(date);
    
    let year = date.getFullYear();
    console.log(year);
    
    const birthDay = new Date(year,month - 1, day);
    console.log(birthDay);
    
    if(birthDay < date) {
        birthDay.setFullYear(year + 1);
    }
    return birthDay;
}
const Next_BirthDay = birthDay(12,3)
console.log(Next_BirthDay);


// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

// Replace with your birth month and day
const nextBirthday = getNextBirthday(12, 25); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.