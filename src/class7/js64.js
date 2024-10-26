// Factory functions


// const user={
//     firstName:"viart",
//     lastName:"kohil",
//     email:"arunbabu120894@gmail.com",
//     age:19,
//     address:"house number-566, delhi, UP",
//     about:function(){
//         return `${this.firstName} and age is ${this.age}`
//     },
//     is18:function(){
//         return this.age >=18
//     }
// }

// const results=user.about();
// console.log(results);


// 1.function (that function creates the object)
// 2. add key value pair
// 3. object ko return karega

function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
          return `${this.firstName} and age is ${this.age}`
    }
    user.is18=function(){
        return this.age >=18
    }
    return user;
};

 const user1=createUser("ram","singh","ram@gmail.com",52,"house number-18, UP");
 const user2=createUser("sam","singh","sam@gmail.com",525,"house number-158, AP");
 console.log(user1);
 console.log(user2);
 const res1=user1.about();
 console.log(res1);
 const res2= user1.is18.call(user2);
 console.log(res2);
 





