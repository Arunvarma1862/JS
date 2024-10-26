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
console.log(array[0].name);

for(let user of array){
    console.log(user.name)
}