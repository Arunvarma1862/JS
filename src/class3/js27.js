// spread operator in objects

//1
// let obj={
//     name:"virat",
//     age:56
// }

// console.log(obj)
// obj={...obj,team:"india"};
// console.log(obj)

// 2
// let obj={
//     name:"virat",
//     age:56
// }
// let obj2={
//     lastname:"kohil",
//     halfcentutry:62
// }
// let mergeObj={...obj,...obj2,century:100};
// console.log(mergeObj)

//3  overriding 
// let obj={
//     name:"virat",
//     age:56
// }
// console.log(obj)
// obj={...obj,age:25};
// console.log(obj)

//4 
// let array1=[1,2,3];
// let array2=[4,5,6];

// let newArray=[...array1,...array2,85,96];
// console.log(array1)
// console.log(newArray)
// newArray.push(4633);
// console.log(array1);
// console.log(newArray);

//5

let newString=[..."abc"];   // convert string to array
let a="india"
a=[...a]   // convert string to array
let num={..."123456789"};   // convert string to object
let b={...["item1","item2"]}  // convert array to object
let obj={
    name:"virat",
    age:25
}
let c={...obj,format:["odi","test","t20"]}
console.log(num)
console.log(newString)
console.log(a)
console.log(b)
console.log(c)



//6 convert array to object
let arr1=[1,2,3,4,5];
let obj16={...arr1};
console.log(obj16)
