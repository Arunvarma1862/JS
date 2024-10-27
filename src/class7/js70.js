// new keyword 

function  createUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

createUser.prototype.about=function(){
    console.log(this.firstName, this.age)
}
createUser.prototype.is18=function(){
   return this.age >=18
}

const user1 = new createUser("virat",23);

// new keyword
// 1. create empty object , which is this={}
// 2. return this
// 3. not required of Object.create(createuser.prototype)
console.log(user1);
user1.about();
console.log(user1.is18());