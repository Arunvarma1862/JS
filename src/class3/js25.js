// how to iterate object

// for in loop
// Object.keys

let obj={
    name:"virat",
    age:56,
    "formats types":["odi","t20","test"]
}

for(let key in obj){
    // console.log(key,obj[key]);
    console.log(`${key} is ${obj[key]}`)
}

console.log(Object.keys(obj))

for(let key of Object.keys(obj)){
    console.log("Data is", key);
   
}


