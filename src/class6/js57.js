// optional chaining

const user={
    firstname:"virat",
    age:56,
    // address:{
    //     houseNumber:562,
    //     city:"delhi",
    //     state:"mp"
    // }
}

console.log(user?.firstname)
console.log(user?.address)
console.log(user?.address?.state)