// Question 42: Great Magicians: Add "the Great" to magician names.


// 1st method
let magicians: string[] = ["Alice", "David", "Chris","hery porter"];

function magician(magicians:String[]){
    magicians.forEach(magician1 => {
        console.log(magician1 + " the great");
        
    })
}

magician(magicians)


// 2nd method
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
magician(magicians); // Shows modified names