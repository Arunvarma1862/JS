// While loop in array 

const fruits=["apple","mango","kiwi","baby"];
const fruits2=[]

let i=0;
while(i<fruits.length){
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i])
    i++;
    
}
console.log(fruits2)