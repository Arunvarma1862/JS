// __proto__ or [[prototype]]

const obj1={
    key1:"value1",
    key2:"value2",
    about(){
        console.log(`${this.key1},${this.key2}`)
    }
}

// another way to create empty object
// const obj2={}       // one way
const obj2=Object.create(obj1) // return empty object; // second way 
obj2.key3="value3";
console.log(obj1)
console.log(obj2.key1);
console.log(obj2);
console.log(obj2.__proto__)


// __proto__ or [[prototype]]  both are same
// prototype different
