class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        console.log("before");
        return `${this.name} is eating `;
    
    }
    isSuperCute(){
        return this.age <=1;
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
        super.eat()
        return `modified eat ${this.name}`
    }

    isRoar(){
        return true
    }
    run(){
        return `${this.speed}`
    }
}

// const animal1= new Animal("tiger",1);
// const doggy= new dog("dogggy",63,635);
// console.log(doggy.isRoar());
// console.log(doggy.run())
// console.log(doggy.eat())

const animal1= new Animal("sher",122);
const doggy= new dog("dogggy",63,635);
console.log(animal1);
console.log(doggy.eat())