// getter and setters

// one way
// class person{
//     constructor(firstname,lastname,age){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.age=age;
//     }

//     get fullName(){
//         return `${this.firstname} ${this.lastname}`
//     }
//     setname(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname
//     }

// }
// const user= new person("virat","singh",56);
// console.log(user);
// console.log(user.firstname);
// console.log(user.lastname);
// console.log(user.fullName);   // method can convert to property by using get
// // user.setname("kohil","kalyan");
// user.firstname="kohil"
// user.lastname="singh"
// console.log(user.fullName);


// second way
class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullName(fullname){
      const[firstname,lastname]=  fullname.split(" ") ;
      this.firstname=firstname;
      this.lastname=lastname
    }

}
const user= new person("virat","singh",56);
console.log(user);
console.log(user.fullName);
user.fullName="varun dhawan"
console.log(user.fullName)