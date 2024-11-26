// map method- Always creates new array

//one way
const arr=[4,5,6,7,8];
// function func1(num){
//     return num*num;
// }

// let newArr= arr.map(func1)
// console.log(newArr);

// second way
let newArr= arr.map((value,index,array)=>{
    return value*value;
})
console.log(newArr);
console.log(arr);


const users=[
    {name:"virat",age:25},
    {name:"kohil",age:25},
    {name:"singh",age:25},
    {name:"harsit",age:25},
]

let newArr23=users.map((value,index)=>{
    return value.name;
})
console.log(newArr23)


