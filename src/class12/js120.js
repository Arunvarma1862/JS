// synchronous vs asynchronous programming language


// synchronous programming- javascript is synchronous programming langauage-single threaded
// console.log("script start");

// for(let i=0;i<10000;i++){
//     console.log("india")
// }
// console.log("script end");


// asynchronous programming
// settimeout, settimeout with 0 seconds

console.log("script start");
const id=setTimeout(() => {
    console.log("inside function")
}, 2000);

for(let i=0;i<100;i++){
    console.log(".....")
}

console.log(id);
clearTimeout(id);
console.log("script end")