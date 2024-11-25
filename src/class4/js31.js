// function declaration and expression

//1 function declaration
// function func(){
//     console.log("hello world")
// }
// func();

// function expression
const func= function (){
    console.log("hello world")
}
func();

//2
function func1(){
    return 2+4;
}

let a=func1()
console.log(a)

// 3
function func3(a,b){
    return a+b;
}

console.log(func3(4,9))

//4 -Nan case
function func4(a,b,c){
    return a+b+c
}
console.log(func4(4,99)) 
console.log(undefined+undefined)

//5
// is Even
// input:1
// output: true, false

function func5(a){
    // let x= `${a%2==0?"even":"odd"}`
    // return x;

    // if(a%2===0){
    //     return true;
    // }
    // else{
    //     return false
    // }

    return a%2===0
}

console.log(func5(122));

//6
//input:string
//output:firstcharcter

function func6(anyString){
    // return anyString.slice(0,1)
    return anyString[0]
}
console.log(func6("helloworld"))

//7
//input:array, target(number)
//output:index of target if present in array

const func7=function (array,target){
   for(let i=0;i<array.length;i++){
    if(array[i]===target){
        return i
    }
   }
   return -1
}
console.log(func7([1,8,9,8,6],9))
