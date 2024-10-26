// function returing function

// function func1(){
//     return {name:"virat"};
// }
// const func= func1();
// console.log(func)

//1

// function func1(){
//     function hello(){
//       console.log("hello world")
//     }
//     return hello;
// }
// const func= func1();
// func()

//2
// function func1(){
//     function hello(){
//       return "hello world"
//     }
//     return hello
// }
// const func= func1();
// console.log(func());

//3
function func1(){
    return function (){
        return "hello world"
    }
}
const func= func1();
console.log(func());