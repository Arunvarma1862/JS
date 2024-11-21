// array destructing 

// let array=["value1","value2"];
// let a=array[0];
// let b=array[1];
// console.log("array1 is",a);
// console.log("array2 is",b);


let array =["value1","value2","value3","value4"];
let [myvar1,,myvar2]= array;
let newArray= array.slice(2);
// myvar1="value changed";
console.log("myvar1 ",myvar1);
console.log("myvar2 ",myvar2);
console.log("newArray ",newArray);

// let array =["value1","value2","value3","value4"];
// let [myvar1,myvar2,...mynewArray]= array;
// console.log("myvar1 ",myvar1);
// console.log("myvar2 ",myvar2);
// console.log("newArray ",mynewArray);


let a=[1,2,3];
let b=[4,5,6];
let c= [...a,...b];
console.log("spread operator",c);


let item1=["apple","mango","kiwi","orange"];

let[a1,...a2]=item1;
console.log(a1);
console.log(a2);
// console.log(a3);

