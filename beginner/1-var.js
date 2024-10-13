/*
Javascript Variables

Variables are containers for storing values.

JavaScript Variables can be declared in 4 ways: var, const, let, and automatically.

The var keyword was used in all JavaScript code from 1995 to 2015.
Only use var if you MUST support old browsers.

Always use const if :
- the value should not be changed
- the type should not be changed (Arrays and Objects)

Otherwise use let.

It is considered good programming practice to always declare variables before use.
*/

let currentYear;    // declaring a variable before use
let address;        // we can assign a value later

const name = "Rian Aditro"; // declaring a constant variable
const yearBorn = 2000;      // always directly assign a value

currentYear = 2024;

age = currentYear - yearBorn; // declared and assigned at the same time without declaration

console.log("Hello, my name is " + name + " and I am " + age + " years old.");

/*
don't use name as a global variable
*/


/*
delete comments below before running




// Task 1: re-assign counter to 10
let counter = 0;

// Task 2: re-assign pi to 3.14159
const pi = 3.14;

// Task 3: print out myVar
console.log(myVar);
var myVar = 10;

// Task 4: print out greeting
if (true) {
    let greeting = "Hello";
}
// console.log(greeting);

// Task 5: print out Bob and Alice
const name = "Bob";
if (true) {
    const name = "Alice";
}
console.log(name);

delete comments above before running
*/

