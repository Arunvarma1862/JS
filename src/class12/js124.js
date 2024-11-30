//understand callback


//1
// function func1(callback){
//     console.log("function 1 is called !!!");
//     callback()
// }


// function func2(){
//     console.log("function 2 is called !!!")
// }

// func1(func2);
// func1(function func2(){
//     console.log("function 2 is called !!!")
// })
// func1(()=>{
//     console.log("function 2 is called!!!")
// })


///2


// function getTwoNumbersAndAdd(number1,number2,onSucess,onFailure){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         onSucess(number1,number2)
//     }
//     else{
//         onFailure()
//     } 
// }

// getTwoNumbersAndAdd(4,6,function addNumbers(num1,num2){
//     console.log(num1+num2)
// },()=>{
//     console.log("wrong Data")
// });


//3


// function getTwoNumbersAndAdd(number1,number2,onSucess,onFailure){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         onSucess(number1,number2)
//     }
//     else{
//         onFailure()
//     } 
// }
// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }
// const onFail=()=>{
//     console.log("wrong Data")
// }

// getTwoNumbersAndAdd(4,6,addNumbers,onFail);


//4

function getMultipleTwoNumbers(number1,number2,onsucess,onFailure){
    if(typeof number1 ==="number" && typeof number2 ==="number"){
        onsucess(number1,number2)
    }
    else{
        onFailure()
    }
}

function mulNumber(num1,num2){
    console.log(num1*num2)
}
const onFail=()=>{
    console.log("wrong data")
}

getMultipleTwoNumbers(4,6,mulNumber,onFail)