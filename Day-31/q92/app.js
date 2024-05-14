// Question 92: Write a function to remove the last element from an array
//  and return the removed element.
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
var fruits = ['Asif', 'Ali'];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
var removeElement = function (array) {
    return array.pop();
};
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(removeElement(number));
console.log(number);
