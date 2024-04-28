// Question 45: Cars: Create detailed car objects with flexible properties.

function make_car(manufacturer: string, model: number, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", 1999, ["color", "red"], ["power staring", false],["engin type", "Diesel"]));
console.log(make_car("Ford", 2021, ["color", "blue"], ["sunroof", true]));