// Question 25: Alien Colors #1: Imagine an alien was just shot down
//  in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 6 points!");
  // No output because the condition is false
}