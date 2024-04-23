// Question 37: Large Shirts: Default values in make_shirt().

function Shirt (size:string='Large', text: String = 'I Love TypeScript!'){
    console.log(`creating a ${size} size shirt with print message ${text}`);
}

Shirt();
Shirt('Medium');
Shirt('Small','I Love Python!');