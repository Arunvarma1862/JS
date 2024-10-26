// difference between dot and bracket notation 
const key="email"
let obj={
    name:"virat",
    age:56,
    "formats types":["odi","t20","test"]

}
console.log(obj)
// console.log(obj.formats types); // wrong type use
console.log(obj["formats types"])

// obj={...obj, email:"arunbabu120894@gmail.com"}
obj[key]="virat@gmail.com"
console.log(obj)