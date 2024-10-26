// primitive and refrence data types 

let num1=1;
let num2=num1;
console.log("num1",num1);
console.log("num2",num2);
num1++;
console.log("num1",num1);
console.log("num2",num2);


// refrence type- stack and heap memory- same address refre to diffrent pointer

let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1)
console.log("array2",array2)
console.log(array1===array2)  // true
array1.push("item3")
console.log("array1",array1)
console.log("array2",array2)