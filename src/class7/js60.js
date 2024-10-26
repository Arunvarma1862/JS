//call, apply and  bind


function about(hobby, singer){
    console.log(this.firstname,this.age,hobby,singer)
}
const user1={
    firstname:"virat",
    age:63,
    // about:function(){
    //     console.log(this.firstname,this.age)
    // }
}
const user2={
    firstname:"kohil",
    age:36,
 
}
//call
// user1.about.call(user2);
about.call(user2,"violin","sidram");

//apply
about.apply(user1,["violin","rahman"])

//bind
const func1=about.bind(user1,"violin","bach");
func1();

// hello world 