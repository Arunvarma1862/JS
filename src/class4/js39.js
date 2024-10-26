// params destructing 

//mostly used in object
//react

const person={
    name:"virat",
    gender:"male"
}

// function print(obj){
//    console.log(obj.name);
//    console.log(obj.gender);
//    console.log(obj.ages)
// }
// print(person)

function print({name,gender,ages}){
   console.log(name);
   console.log(gender);
   console.log(ages)
}

print(person)