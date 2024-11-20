
// Intro to arrays- reference type,which are called as object
// arrays are muttable , can change the original array but strings are not muttable can't change  the original string but can assign in new string
// array is collection of elements/items
// Ordered collection of items

let fruits = ["apple","mango","grapes"];
let mixed  = [null,undefined, true, 2, 2.6,"helloworld",0];
console.log(fruits);
console.log(fruits[2]);
fruits[1]="kiwi";
console.log(fruits);

let obj={};               // object literal
console.log(typeof obj);
console.log(mixed,typeof mixed);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

