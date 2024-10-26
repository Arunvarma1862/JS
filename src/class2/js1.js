"use strict"

console.log("hello world");
console.log(`Hello world123`);

// let a;
// a=10;
// console.log(a);
// a=20;
// console.log(a)


firstName="hero";
console.log(firstName);

firstname="hero56";
console.log(firstName)


let x;          // Declaration of a variable 'x'
console.log(x); // Output: undefined (since it hasn't been assigned a value yet)

let y = 10;      // Declaration and initialization of 'y'
console.log(y);  // Output: 10

let z;           // Declaration
z = 5;           // Assignment of value 5 to 'z'
console.log(z);  // Output: 5

z = 20;           // Re-assignment of a new value to 'z'
console.log(z);   // Output: 20


let names;          // Declaration
console.log(names); // Output: undefined (since 'name' is declared but not initialized)

names= "Alice";     // Assignment
console.log(names); // Output: Alice (after assignment)

let age = 25;        // Declaration and initialization in one step
console.log(age);    // Output: 25

age = 30;           // Re-assignment
console.log(age);    // Output: 30

if (true) {
    let blockScoped = "I'm only visible in this block!";
    console.log(blockScoped); // Output: "I'm only visible in this block!"
}
// console.log(blockScoped); // Error: blockScoped is not defined
