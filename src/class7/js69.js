// mixing __proto__ and prototype 

// const userMethods={
//     about:function(){
//          return `${this.firstName} and age is ${this.age}`
//    },
//    is18:function(){
//        return this.age >=18
//    },
//    sing:function(){
//     return "toon na na na la la la"
//    }
//  }
 
 function createUser(firstName,lastName,email,age,address){
     const user=Object.create(createUser.prototype);
     user.firstName=firstName;
     user.lastName=lastName;
     user.email=email;
     user.age=age;
     user.address=address;
     return user;
 };
 createUser.prototype.about=function(){
      return `${this.firstName} and age is ${this.age}`
 }
 createUser.prototype.is18=function(){
    return this.age >=18
}
createUser.prototype.sing=function(){
   return "toon na na na la la la"
}
  
  const user1=createUser("ram","singh","ram@gmail.com",52,"house number-18, UP");
  const user2=createUser("sam","singh","sam@gmail.com",525,"house number-158, AP");
  const user3=createUser("bala","singh","bala@gmail.com",25,"house number-58, MP");

  console.log(createUser.prototype)
  console.log(user1)
  console.log(user1.about());
  console.log(user3.about());
 
  