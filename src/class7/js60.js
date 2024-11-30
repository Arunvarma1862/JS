//call,apply and bind


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
// call-Invokes a function and explicitly sets the value of this. Arguments are passed individually.
// user1.about.call(user2);
about.call(user2,"violin","sidram");

//apply- Similar to call, but arguments are passed as an array. Passed as an array.
about.apply(user1,["violin","rahman"]);

//bind- Returns a new function with this bound to the specified value. It does not immediately invoke the function. Sets this and returns a new function.
const func1=about.bind(user1,"violin");
func1("bach");

// When to Use
// Use call when arguments are simple and passed individually.
// Use apply when arguments are already in an array.
// Use bind when you need to create a new function with this permanently set.

// hello world 