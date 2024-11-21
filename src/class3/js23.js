// objects -refrence type

// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// object dont have index


// how to create objects

let obj={
    name:"virat",
    age:56,
    formats:["odi","t20","test"]
}

// how to access data from the objects

obj={...obj,place:"london",age:25};
// obj.century=100
obj["age"]=100;
console.log(obj,typeof obj);
console.log(obj.name);
console.log(obj.formats[0]);
console.log(obj["age"]);




