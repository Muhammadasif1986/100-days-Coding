// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars,
//  trucks, and motorcycles using enums, and show one example.
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
// Testing
var VehicleType1;
(function (VehicleType1) {
    VehicleType1[VehicleType1["Car"] = 0] = "Car";
    VehicleType1[VehicleType1["Truck"] = 1] = "Truck";
    VehicleType1[VehicleType1["Motorcycle"] = 2] = "Motorcycle";
    VehicleType1[VehicleType1["Geep"] = 3] = "Geep";
    VehicleType1[VehicleType1["pajeero"] = 4] = "pajeero";
    VehicleType1[VehicleType1["cycle"] = 5] = "cycle";
})(VehicleType1 || (VehicleType1 = {}));
console.log(VehicleType.Motorcycle);
console.log(VehicleType1.pajeero);
