//filter method- length changes and also create new array

let arr=[1,2,3,4,5];


let newArr=arr.filter((value,index,array)=>{
//    return value>3;
      return value%2==0
})
console.log(newArr);


let array= [1,2,3,4,5,6];
let newArray=array.filter((value,index,array)=>{
      return value>3;
})

console.log(newArray)