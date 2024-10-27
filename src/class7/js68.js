// prototype

// function hello(){
//     console.log("hello world")
// }
//1
// javascript function -> function + object 

// console.log(hello.name); // name property--> tells the function name 

// you can add own properties
// hello.myownproperties="very unique number";
// console.log(hello.myownproperties);

// name property--> tells the function name 
// function provides more useful properties

// console.log(hello.prototype);  // {} free space or empty object
// only functions provide prototype property- not by object or array
// by prove by below code
// if(hello.prototype){
//     console.log("prototype is present");
// }
// else{
//     console.log("prototype is not present");
// }


//2

function hello(){
    console.log("hello world")
}

hello.prototype.myown="unique number";
hello.prototype.xyz="xyz";
hello.prototype.sing=function(){
    return "lalalal"
}
console.log(hello);
console.log(hello.prototype);
console.log(hello.prototype.sing());


