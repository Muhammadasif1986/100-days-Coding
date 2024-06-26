"use strict";
// Example using Promise.all to wait for multiple
// promises to resolve
let promise1 = Promise.resolve(19);
let promise2 = 47;
let promise3 = new Promise((resolve) => {
    setTimeout(resolve, 500, "Delay");
});
Promise.all([promise1, promise2, promise3]).then((value) => {
    console.log(value);
});
// This demonstrates how Promise.all waits for all
// promises to resolve and then logs the array of their results.
