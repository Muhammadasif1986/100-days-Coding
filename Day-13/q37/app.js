// Question 37: Large Shirts: Default values in make_shirt().
function Shirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I Love TypeScript!'; }
    console.log("creating a ".concat(size, " size shirt with print message ").concat(text));
}
Shirt();
Shirt('Medium');
Shirt('Small', 'I Love Python!');
