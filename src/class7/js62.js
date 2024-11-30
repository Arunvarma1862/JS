// this inside arrow function-here this refers to global(which is window)

const user1={
    firstname:"virat",
    age:63,
    about:()=>{
        console.log(this)
        console.log(this.firstname,this.age)
    }
}

user1.about();
// const func= user1.about.bind(user1);
// func()