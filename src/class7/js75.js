// class examples

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating `
    }
    isSuperCute(){
        return this.age <=1
    }

    isCute(){
        return true
    }
}


class dog extends Animal{

    isRoar(){
        return true
    }
}

const animal1= new Animal("tiger",1);
const doggy= new dog("dogggy",63);
// console.log(doggy.eat())
// console.log(doggy.isRoar())
console.log(animal1)
console.log(doggy)
// console.log(animal1.eat());
// console.log(animal1.isSuperCute())
// console.log(animal1.isCute())