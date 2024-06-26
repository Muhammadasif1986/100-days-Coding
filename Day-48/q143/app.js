"use strict";
// Creates a Promise that either resolves or rejects 
// based on a condition
const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    console.log(success);
    // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    // Handles a successful resolution
    .then((result) => console.log(result))
    // Handles a rejection
    .catch((error) => console.log(error.message));
// This code will randomly log either "Success!"
// or "Failure" based on the outcome of the promise.
