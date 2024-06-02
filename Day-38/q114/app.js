// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Explain & TIP: Iterating over a Map can be done using the .forEach() method 
// or a for...of loop, providing access to each key-value pair.
const studentIdsAndNames = new Map();
studentIdsAndNames.set(1, "Alice");
studentIdsAndNames.set(2, "Bob");
studentIdsAndNames.set(3, "Charlie");
console.log(`id is ${studentIdsAndNames.get(2)}`);
studentIdsAndNames.forEach((name, id) => {
    console.log(`ID: ${id}, Name: ${name}`);
});
for (let [id, name] of studentIdsAndNames) {
    console.log("Name " + name + " Id " + id);
}
for (let i = 0; i < studentIdsAndNames.size; i++) {
    console.log("Name " + studentIdsAndNames.get(i + 1) + " Id " + (i + 1));
}
// Question  Create a new Map that contains the IDs and names of students who passed an exam.
const passedStudents = new Map();
passedStudents.set(2, "Bob");
passedStudents.set(4, "David");
passedStudents.set(6, "Eve");
console.log(passedStudents);
// Question  Create a new Map that contains the IDs and names of students who failed an exam.
const failedStudents = new Map();
failedStudents.set(1, "Alice");
failedStudents.set(3, "Charlie");
failedStudents.set(5, "Evan");
console.log(failedStudents);
