// Logging something to the console.
console.log("Hello World!");

let firstName = 'James'; // String Literal
console.log(firstName);

let interestRate = 0.3; // Number Literal
interestRate = 1;
console.log(interestRate);

let isApproved = false; //Boolean literal

let person = {
    name: 'James',
    age: 34
}; // Object literal

// Dot notation
person.name = 'Joe';

// Brackets notation
person['name'] = 'Sue';

console.log(person.name);

// Arrays
let selectedColors = ['red', 'green'];
selectedColors[2] = 3;
console.log(selectedColors[2]);

// functions
function greet(name){
    console.log("Hello " + name + "!");
}

greet(person.name);