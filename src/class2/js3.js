// data types (primitive data types)
// String
// Number
// null
// undefined
// Symbol
// BigInt
// Boolean

let age=25;
let names="hello world"
 console.log(typeof age)
 console.log(typeof names)

//convert number to string 

age= age.toString();  // method-1
// age= age + "";       //  method-2
console.log(typeof age,age)

// convert string to number

let ab="563"
// ab=+"563"            method-1
ab= Number.parseInt(ab);  // method-2
console.log(typeof ab, ab)


console.log(`india is my country ${ab}  and ${names}`)


//undefined

let n;
console.log(typeof n)
n= "db";
console.log(typeof n, n)

//null

let m=null;
console.log(m);
m="hsdb";
console.log(typeof m, m)

let userProfile = {
    name: "Alice",
    age: 25,
    address: null // Address is not provided yet, so we explicitly set it to null
};

console.log(userProfile.address); // Output: null (the absence of address)

userProfile.address = "123 Main St";
console.log(userProfile.address);

// Here, null is used to indicate that the address field is intentionally left empty at first but will be filled later.

console.log(typeof undefined)
console.log(typeof null)  // object it is bug/error

//bigint

let j=BigInt(25625555533333333333);
let h=12n;
console.log(j+h);
console.log(Number.MAX_SAFE_INTEGER)
