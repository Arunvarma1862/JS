// imp array methods

// for each
// map
// filter
// reduce


// for each
const numbers=[4,5,6,7,8];

function func1(number,index){
    console.log(`index is ${index} and number is ${number}`);
    // console.log(`${number}*2= ${number*2}`);
}
// one way
// multiply(numbers[0],5);

// second way
// for(let i=0;i<numbers.length;i++){
//     multiply(numbers[i],i)
// }

// third way
// numbers.forEach(func1);

// fourth way
numbers.forEach((value,index,array)=>{
    console.log(`index is ${index} and number is ${value} array is ${array}`);
})


const users=[
    {name:"virat",age:25},
    {name:"kohil",age:25},
    {name:"singh",age:25},
    {name:"harsit",age:25},
]

users.forEach((value,index,array)=>{
    console.log(`userName is ${value.name} ${index} `)
})