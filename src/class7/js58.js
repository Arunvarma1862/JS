// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} person age is ${this.age}`)
}
const person1={
    firstName:"virat",
    age:61,
    about:personInfo
}
const person2={
    firstName:"kohil",
    age:66,
    about:personInfo
}
const person3={
    firstName:"jadeja",
    age:26,
    about:personInfo
}
person1.about();