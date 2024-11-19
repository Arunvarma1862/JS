let firstName="hello world"
console.log(firstName[2]);
console.log(firstName[firstName.length-1]);
console.log(firstName[firstName.length-2]);

//trim

let lastName="    helloworld    ";
console.log(lastName.length)
console.log(lastName)
console.log(lastName.trim());
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.slice(5,9)); 
let newLastName= lastName.slice(5,8);
console.log("india ", newLastName);


let a= "     hello world5     ";
console.log(a.length)
a=a.trim();
console.log(a)
console.log(a.length)