//clone using object.assign

const obj1={
    name:"virat",
    age:56
}
// const obj2=obj1;  // same data  will be in obj1 and obj2, while any change in any object 
// const obj2={...obj1}
const obj2=Object.assign({},obj1)
obj1["gender"]="male"
console.log(obj1);
console.log(obj2);