// Question 43: Unchanged Magicians: Preserve the original magician names
//  while creating a new "great" list.

let magicians: string[] = ["Alice", "David", "Chris","hery porter"];

function show_magician(magicians:String[]){
    magicians.forEach(magician => {
        console.log(magician);
        
    })
    return magicians
}

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        // @ts-ignore
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magician(magicians); // Shows original names
console.log("Great magicians:");
show_magician(greatMagicians); // Shows modified names