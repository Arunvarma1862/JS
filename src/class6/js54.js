// sets
// it is iterable
// Store data
// sets also have its own same method
// no index based access
// order is not guranteed
// unique items only (no duplicate allowed)

// const item=["item21","item2","item3"]
// const num= new Set();
// num.add(1);
// num.add(2);
// num.add(3);
// num.add(4);
// num.add(5);
// num.add(6);
// num.add(item);
// num.add(item);  // not possible , same memory reference
// num.add(["item51","item52"]);  // memory reference type difference 
// num.add(["item21","item52"]);  // memory reference type difference

// if(num.has(1)){
//     console.log("1 is present")
// }
// else{
//     console.log("1 is not present")
// }

// for(let key of num){
//     console.log(key)
// }
// console.log(num);
// console.log(num[2]); // not possible to access index in sets



const arr=[1,1,2,2,3,4,5,5,6,6];
const uniqueElements=new Set(arr);
console.log(uniqueElements);

let length=0;
for(let key of uniqueElements){
    length++;
}
console.log(length)
