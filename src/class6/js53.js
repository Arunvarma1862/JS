// iterables
// string and array iterable, object are not iterable


const firstName="virat";
for(let key of firstName){
    console.log(key)
}

const arr=[1,2,3,4,5,6,7,8,8];
for(let key of arr){
    console.log(key)
}

// array like object
// eg:string 
const firstname="kohil";
console.log(firstname.length);
console.log(firstname[3])
