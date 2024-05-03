// Question 60: Self-Running User Profile: Create a quick, self-setup
//  profile for a user that can tell you the user's name and age.
// This profile sets itself up and can share info about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "Muhammad Asif";
    var age = 37;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user
//Trying
var profile = (function () {
    var name = "Asif";
    var age = 35;
    return {
        displayinfo: function () {
            console.log("Name ".concat(name, " age ").concat(age));
        }
    };
})();
profile.displayinfo();
