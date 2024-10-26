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

//3
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

let newString=[..."abc"];
let a="india"
a=[...a]
let num={..."123456789"};   // string 
let b={...["item1","item2"]}  // array
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