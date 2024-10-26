// some memory related problems;

const userMethods={
   about:function(){
        return `${this.firstName} and age is ${this.age}`
  },
  is18:function(){
      return this.age >=18
  }
}

function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18
    return user;
};

 const user1=createUser("ram","singh","ram@gmail.com",52,"house number-18, UP");
 const user2=createUser("sam","singh","sam@gmail.com",525,"house number-158, AP");
 const user3=createUser("bala","singh","bala@gmail.com",25,"house number-58, MP");

 console.log(user1.about());
 console.log(user3.about());

 