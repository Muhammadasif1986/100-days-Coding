var magicians = ["Alice", "David", "Chris", "hery porter"];
function magician(magicians) {
    magicians.forEach(function (magician1) {
        console.log(magician1);
    });
}
magician(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
magician(magicians); // Shows modified names
