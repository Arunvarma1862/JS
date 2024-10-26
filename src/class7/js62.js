// this inside arrow function

const user1={
    firstname:"virat",
    age:63,
    about:()=>{
        console.log(this)
        console.log(this.firstname,this.age)
    }
}

user1.about()