const user1={
    firstname:"virat",
    age:63,
    about:function(){
        console.log(window)
        console.log(this.firstname,this.age)
    }
}

//dont do this mistake-some warnings

// user1.about();-right
// const func=user1.about; -this refers to window
const func=user1.about.bind(user1);
func()




