// short syntax for methods

// const user1={
//     firstname:"virat",
//     age:63,
//     about:function(){
//          console.log(this.firstname,this.age)
//     }
// }


const user1={
    firstname:"virat",
    age:63,
    about(){
         console.log(this.firstname,this.age)
    }
}

user1.about()