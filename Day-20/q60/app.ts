// Question 60: Self-Running User Profile: Create a quick, self-setup
//  profile for a user that can tell you the user's name and age.

// This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "Muhammad Asif";
    let age = 37;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user

//Trying

let profile=(function(){
    let name = "Asif";
    let age = 35;
return {
    displayinfo: function(){
        console.log(`Name ${name} age ${age}`);
        
    }
}
})();

profile.displayinfo()

let a =function(){}();