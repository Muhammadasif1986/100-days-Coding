// Question 13: Your Own Array: Think of your favorite mode of
//  transportation, such as a motorcycle or a car, and make 
//  a list that stores several examples. Use your list to
//   print a series of statements about these items, such as
//    “I would like to own a Honda motorcycle.”
var transports = ["suzuki 150", "Suzuki Alto", "Audi A8"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "\n"));
});
for (var _i = 0, transports_1 = transports; _i < transports_1.length; _i++) {
    var transport1 = transports_1[_i];
    console.log("I would like to own a \n" + transport1);
}
for (var i = 0; i < transports.length; i++) {
    console.log("\nI would like to own a ", transports[i]);
}
