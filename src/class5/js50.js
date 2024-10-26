// some method

//1
const num=[3,41,5,63,8];

let bn=num.some((num)=>{
    return num%2===0
});

console.log(bn);

//2
const usersCart=[
    {productId:1,productName:"iphone",price:52000},
    {productId:2,productName:"moto",price:62000},
    {productId:3,productName:"sony",price:42000},
    {productId:4,productName:"samsung",price:32000},
    {productId:5,productName:"redimi",price:22000},

];

let a=usersCart.some((num)=>{
    return num.price>50000
})
console.log(a)

