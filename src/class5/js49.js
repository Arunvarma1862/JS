// every method

// callback function ----> true or false (boolean)
// every method ----> return true or false 

// 1
const arr=[4,6,50,8,90];

let a=arr.every((num)=>num%2===0);
console.log(a);
console.log(arr);

//2 
const usersCart=[
    {productId:1,productName:"iphone",price:52000},
    {productId:2,productName:"moto",price:62000},
    {productId:3,productName:"sony",price:42000},
    {productId:4,productName:"samsung",price:32000},
    {productId:5,productName:"redimi",price:22000},

];

let anm=usersCart.every((value)=>{
    return value.price <85000;
});

console.log(anm)
