

//super keyword

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
console.log(doggy.eat());


//1.Calling the Parent Class Constructor

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calls the parent constructor to set 'name'
      this.breed = breed;
    }
  }
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog); // Output: Dog { name: 'Buddy', breed: 'Golden Retriever' }

  
  //2 Calling a Parent Class Method
  class Vehicle {
    start() {
      console.log("Vehicle is starting...");
    }
  }
  
  class Car extends Vehicle {
    start() {
      super.start(); // Calls the 'start' method of the parent class
      console.log("Car is starting...");
    }
  }
  
  const myCar = new Car();
  myCar.start();
  // Output:
  // "Vehicle is starting..."
  // "Car is starting..."

  
  //3.Using super in Getter and Setter Methods

  class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  }
  
  class Employee extends Person {
    get name() {
      return `Employee: ${super.name}`; // Accesses the parent getter
    }
  
    set name(value) {
      super.name = value.toUpperCase(); // Calls the parent setter with modified value
    }
  }
  
  const emp = new Employee("john");
  console.log(emp.name); // Output: Employee: JOHN
  emp.name = "jane";
  console.log(emp.name); // Output: Employee: JANE

  
  //4.Using super in Static Methods

  class Shape {
    static identify() {
      return "I am a shape";
    }
  }
  
  class Circle extends Shape {
    static identify() {
      return `${super.identify()}, specifically a circle`; // Calls parent static method
    }
  }
  
  console.log(Circle.identify()); 
  // Output: "I am a shape, specifically a circle"
  