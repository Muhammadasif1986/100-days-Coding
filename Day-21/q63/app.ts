// Question 63: Shape Shifter: Write a program that can describe either
//  a circle or a rectangle using a special type alias, including
//   properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle" | "Square";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
    length?:number; // only for Square
};

// Describing a circle using our Shape type
let circle:Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle:Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Describing a Square using our Shape type
let Square:Shape={
    kind:"Square",
    length:15,
    width:10

}

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
console.log(Square);// and here's the Square
// We made a flexible program that can describe different shapes in detail.
