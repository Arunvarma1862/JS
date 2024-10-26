// reduce method


const arr=[1,2,3,4,5,5];

let reduceValue=arr.reduce((accumalator,currentValue,index,array)=>{
    return accumalator+currentValue;
},intitalvalue=100)
console.log(reduceValue);

// accumaltor  currentValue   return 
// 1               2            3
// 3               3            6
// 6               4            10
// 10              5            15
// 15              5            20


const usercart= [
    {productId:1,productName:"shirt",price:523},
    {productId:2,productName:"pant",price:5232},
    {productId:3,productName:"clothes",price:53},
    {productId:4,productName:"milk",price:23},
    {productId:5,productName:"kira",price:53},

];
let TotalPrice= usercart.reduce((acc,cv,i,a)=>{
    return acc + cv.price
},0)
console.log(TotalPrice)

// let total=0;
// for (let index = 0; index < usercart.length; index++) {
//    total=total+usercart[index].price    
// }
// console.log(total)