// constructor function
 function createUser(firstName,lastName,email,age,address){
     
     this.firstName=firstName;
     this.lastName=lastName;
     this.email=email;
     this.age=age;
     this.address=address;
    
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
 
  const user1= new createUser("ram","singh","ram@gmail.com",52,"house number-18, UP");
  const user2= new createUser("sam","singh","sam@gmail.com",525,"house number-158, AP");
  const user3= new createUser("bala","singh","bala@gmail.com",25,"house number-58, MP");
  

  for(let key in user1){
    console.log(key)
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
  }
