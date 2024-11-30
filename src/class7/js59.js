// this, window object

//The this keyword refers to the context in which a function is executed. It changes based on how the function is called.

//******************1.Global Scope:******************

// In the global execution context (outside any function), this refers to the global object:
// In a browser: window
// In Node.js: global

// console.log(this); // In browsers, logs: window



//2.**************** Inside an Object Method:************

// Inside a method, this refers to the object the method belongs to.

// const obj = {
//     name: "JavaScript",
//     greet() {
//         console.log(this.name); // Refers to `obj`
//     },
// };
// obj.greet(); // Logs: "JavaScript"


//3.************** In a Function:*****************

// In non-strict mode, this refers to the global object (window in browsers).
// In strict mode ("use strict";), this is undefined.

// "use strict"
// function showThis() {
//     console.log(this);
// }
// showThis(); // Logs: window (non-strict mode);



//4.***************** Arrow Functions:*************

// Arrow functions do not have their own this. They inherit this from the surrounding lexical scope.

// const obj = {
//     name: "JavaScript",
//     greet: () => {
//         console.log(this.name); // `this` refers to the global object
//     },
// };
// obj.greet(); // Logs: undefined (in strict mode)



//5.************************** Explicit Binding:***********************

// Using call, apply, or bind, you can explicitly set the value of this.

// function greet() {
//     console.log(this.name);
// }
// const person = { name: "John" };
// greet.call(person); // Logs: "John"



// window is the global object in browser environments.
// It represents the browser's window and provides methods, properties, and objects to interact with the browser.

// Key Properties of window
// ********************Global Variables and Functions:

// Variables declared with var and functions become properties of the window object.
// var x = 10;
// console.log(window.x); // Logs: 10

// *********************DOM Manipulation:
// The window object gives access to the DOM via document.
// console.log(window.document); // Logs the HTML document

// ******************Methods:

// alert(), setTimeout(), setInterval(), etc., are part of window.
// window.alert("Hello, World!");

// ********************Browser Information:

// You can use window.navigator for browser details and window.location for the current URL.


console.log(this);
console.log(window)
console.log(this===window);// true

// "use strict";
function myfunc(){
    console.log(this);
}
window.myfunc();
myfunc()