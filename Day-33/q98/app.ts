// Question 98: Create a JavaScript snippet that calculates and logs how 
// many days are left until New Year.

let countDaysNewYear =():number =>{
    
    const date = new Date();
    console.log(date);
    
    const new_year = new Date(date.getFullYear() +1,0,1);
    console.log(new_year);
    
    const diff = new_year.getTime() - date.getTime();
    console.log(diff);
    
    const days_count =diff / (1000 * 60 * 60 * 24);
    console.log(days_count);
    
    
    return days_count
}

console.log(countDaysNewYear(), "days until new year");


// Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds    
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days and show round value
    return days;
}

console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
