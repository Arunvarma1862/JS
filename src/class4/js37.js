//default parameters

// const addTwo=(a,b)=>{
//     if(typeof b === "undefined"){
//          b=15;
//     }
//     return a+b;
// }
// const bd=addTwo(4,23);
// console.log(bd)


const addTwo=(a,b=1)=>{
    return a+b;
}

const bd=addTwo(4);
console.log(bd)