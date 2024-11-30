// maps
// it is an iterable
// store data in fashion ordered
// store key value pair(like object)
// duplicate keys are not allowed like objects

// difference between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array , number, string , object



//object iterals
// key -> always string
// key -> symbol
// const user={
//     firstName:"virat",
//     age:52
// }
// console.log(user.firstName)



// maps- store key value pair, In object key can be string and symbol but in map key can be any type data
// 1
// const person = new Map();
// person.set("firstname","virat");
// person.set("age",56);
// person.set(1,52);
// person.set([1,2,3],"one");
// person.set({"1":"two"},"one")
// console.log(person.get("firstname"));
// console.log(person.keys());
// console.log(person);

// for(let key of person.keys()){
    // console.log(key,typeof key);
// }

// for(let [key,value] of person){
    //    console.log(key,Array.isArray(key));
    //    console.log(key, value)
// }


//2
const person = new Map([["firstname","virat"],["age",523]]);
// console.log(person);


//3
const person1={
    id:1,
    name:"virat",
    // id:5
}
const person2={
    id:2,
    name:"gayatri"
}
const extraInfo=new Map();
extraInfo.set(person1,{age:56,gender:"male"});
extraInfo.set(person2,{age:26,gender:"female"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).age)
console.log(extraInfo.get(person2).age)

