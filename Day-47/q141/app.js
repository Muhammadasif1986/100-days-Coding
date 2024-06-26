"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example use of the 'await' reserved word
// in asynchronous JavaScript
let Student = {
    name: "Asif",
    Class: "nine",
    RollNo: "2234",
    Subject: "Math"
};
let id = true;
function getDatA() {
    return new Promise((resolve, reject) => {
        if (id) {
            setTimeout(() => {
                console.log("Student Details are ");
                resolve(Student);
            }, 3000);
        }
        else {
            setTimeout(() => {
                reject(`Not found Detail`);
            }, 3000);
        }
    });
}
async function fetchData() {
    // Assuming fetchSomething returns a Promise
    try {
        const data = await getDatA();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
fetchData();
// The 'await' keyword pauses the execution until the
// Promise settles, and then resumes with the resolved value.
// console.log(
//   "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
// );
// This demonstrates how 'await' improves readability and
// flow in asynchronous code.
