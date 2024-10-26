// splice method- modifies original array- return removed elements
// slice method- does not modify original array- return new array
// start, delete and insert

const arr= [1,2,3,4,5,6];
let bn=arr.splice(2,2,101,102,103);
console.log(arr);
console.log(bn)