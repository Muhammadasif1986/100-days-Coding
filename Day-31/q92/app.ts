// Question 92: Write a function to remove the last element from an array
//  and return the removed element.

// This function removes the last element from an array and returns it
function removeLastElement<T>(arr: T[]):T | undefined {
    return arr.pop(); // Removes and returns the last element of the array
}

// Example: Removing the last fruit from the array
const fruits: string[] = ['Asif','Ali'];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.



let removeElement = <R>(array:R[]):R | undefined =>{
    return array.pop();  
}

let number: number[]=[1,2,3,4,5,6,7,8,9]
console.log(removeElement(number));
console.log(number);





