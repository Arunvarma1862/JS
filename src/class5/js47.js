//sort method-changes the original array

const arr2=["abjdj","sdkbj","DFFSBVJS","ZBSDVJD","sjfksbd"]

const arr=[1,500,3,12000,3000];

arr.sort((a,b)=>{
    return a-b
});
console.log(arr);
console.log(arr2)


const usersCart=[
    {productId:1,productName:"iphone",price:52000},
    {productId:2,productName:"moto",price:62000},
    {productId:3,productName:"sony",price:42000},
    {productId:4,productName:"samsung",price:32000},
    {productId:5,productName:"redimi",price:22000},

]
let lowTohigh=usersCart.slice(0).sort((a,b)=>{
    return a.price-b.price
});
let highTolow=usersCart.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log(usersCart);
console.log(lowTohigh);
console.log(highTolow);