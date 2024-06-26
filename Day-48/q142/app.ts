// Creates a Promise that resolves with "Hello, World!"
// after 2 seconds

const HelloPromise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
            resolve("Hello World !!")
            },2000)
      })

    // After 2 seconds, "Hello, World!" will be logged to the console.
    HelloPromise.then((message)=>{
      console.log(message);
    })