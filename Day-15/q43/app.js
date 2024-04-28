// Question 43: Unchanged Magicians: Preserve the original magician names
//  while creating a new "great" list.
var magicians = ["Alice", "David", "Chris", "hery porter"];
function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
    return magicians;
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        // @ts-ignore
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magician(magicians); // Shows original names
console.log("Great magicians:");
show_magician(greatMagicians); // Shows modified names
