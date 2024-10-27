

// class keyword


class createUser{
  constructor(firstName,lastName,email,age,address){
    console.log('constructor called');
    // this={};
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
    // return this;
  }
  about(){
    return `${this.firstName} and age is ${this.age}`
  }
  is18(){
    return this.age >=18
  }
  sing(){
     return "toon na na na la la la"
  }
  func1(a){
    console.log(a)
  }
}

 const user1= new createUser("ram","singh","ram@gmail.com",52,"house number-18, UP");
//  const user2= new createUser("sam","singh","sam@gmail.com",525,"house number-158, AP");
//  const user3= new createUser("bala","singh","bala@gmail.com",25,"house number-58, MP");
 
// console.log(user1);
// console.log(user1.about())
console.log(Object.getPrototypeOf(user1));
user1.func1(15)
