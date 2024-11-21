// object inside array


const array=[
    {
        name:"virat",
        age:52
    },
    {
        name:"kohil",
        age:525
    },
    {
        name:"jadeja",
        age:529
    }
]
// console.log(array[0].name);

for(let user of array){
    console.log(user)
    console.log(user.name)
}


// array inside object

let obj={
   key1:["item1","item2","item3"],
   key2:["item11","item22","item33"],
   key3:["item111","item222","item333"],
}

console.log(obj.key1[0]);
for(let key in obj){
    console.log(obj[key])
}


// array mostly for for of loop
// object mostly for for in loop