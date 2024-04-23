// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let number : number[] =[1,2,3,4,5,6,7,8,9];
for(let num of number){
    let suffix: string;
    if(num == 1){
        suffix = 'st'
    }
    else if (num == 2){
        suffix = 'nd'
    }
    else if(num == 3){
        suffix = 'rd'
    }
    else{
        suffix= 'th'
    }

    console.log(`${num}${suffix}`);
}