

//same method in subclass// method overriding

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

    constructor(name,age,speed){
        super(name,age)
        this.speed=speed
    }
    eat(){
        return `modified eat ${this.name}`
    }

    isRoar(){
        return true
    }
    run(){
        return `${this.speed}`
    }
}

const animal1= new Animal("tiger",1);
const doggy= new dog("dogggy",63,635);
console.log(doggy.isRoar());
console.log(doggy.run())
console.log(doggy.eat())