// for of loop in array - iterable the values

const fruits=["apple","mango","kiwi","baby"];  // array
const fruits2=[]

for(let value of fruits){
    console.log(value)
    fruits2.push(value)
}
console.log(fruits2)

let a="hello world"  // string

// for(let value2 of a){
//     console.log(value2)
// }



// for in loop in array 
for(let indexx in fruits){
    // console.log(index)   // keys
    // console.log(index, fruits[index])  // keys and values
}