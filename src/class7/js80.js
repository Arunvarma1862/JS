// static methods and properties

class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    static user2(){
        console.log("hello world")
    }

    static desc="hello world2"

    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullName(fullname){
      const[firstname,lastname]=  fullname.split(" ") ;
      this.firstname=firstname;
      this.lastname=lastname
    }
    eat(){
      
        return `${this.firstname} is eating `;
    
    }
    isSuperCute(){
        return this.age <=1;
    }

    isCute(){
        return true
    }

}

// const user= new person("virat","kohil",563);
// console.log(user.eat());
person.user2()
console.log(person.desc);