// Nested destrucing 

const Team={
    ind:"india",
    aus:"australia",
    eng:"england",
    sa:"southafrica",
    odi:{
        Team:"ind",
        wins:523
    }
}
console.log(Team);
const {ind,aus,eng,sa,odi}=Team
console.log(odi);



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

const[user1,user2,user3]=array;
console.log(user1.name)
console.log(user2.name)
console.log(user3.name)


const[{name:playerName,age:userAge},,{age}]=array;
console.log(playerName,userAge)
console.log(age)