// how to clone array 

let array1=["item1","item2","item3"];
// let array2=array1.slice(0).concat(["item4","item5"]);   // method-1 to clone array and concat
// let array2=[].concat(array1,["item4","item5"]);    // method-2 to clone array and concat
let array2=[...array1,"item4","item5"]       // method-3 spread operator to clone and concat

console.log("array1",array1);
console.log("array2",array2);
console.log(array1===array2)  // false
array2.push("item4");
console.log("array1",array1);
console.log("array2",array2);


// spread operator in arrays
//1
let numbers = [1, 2, 3];
let copiedNumbers = [...numbers]; // Spread the elements of 'numbers' into 'copiedNumbers'

console.log(copiedNumbers); // Output: [1, 2, 3]
console.log(numbers === copiedNumbers); // Output: false (different memory references)

//2 merging arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//3 Passing array elements as arguments to a function:
function add(x, y, z) {
    return x + y + z;
}

let nums = [1, 2, 3];
console.log(add(...nums)); // Output: 6 (spread the array elements as arguments)



// spreads in objects 
//1 Copying an object 
let person = { name: "Alice", age: 25 };
let copiedPerson = { ...person };

console.log(copiedPerson); // Output: { name: "Alice", age: 25 }
console.log(person === copiedPerson); // Output: false (different objects)


//2 Merging objects: You can merge two or more objects into a single object.
let address = { city: "New York", country: "USA" };
let contact = { phone: "123-456-7890" };

let personDetails = { ...address, ...contact };

console.log(personDetails); // Output: { city: "New York", country: "USA", phone: "123-456-7890" }


//3 Overriding properties in objects:
let baseUser = { name: "John", age: 30 };
let updatedUser = { ...baseUser, age: 35 }; // Override 'age' property

console.log(updatedUser); // Output: { name: "John", age: 35 }

//4 Spread in Strings
let greeting = "Hello";
let chars = [...greeting];

console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

//5 Spread in Function Arguments (Rest Parameters)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10 (collects all arguments into an array)

//6
function Mul(...nums){
  return nums.reduce((acc,cv)=>{
       return acc * cv
    },1)     
}
let numss =[1,2,3,4,5,6,7,8,9];
console.log(Mul(...numss))



