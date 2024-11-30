let numbers=[1,2,3,4,5,6];
console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(numbers);

function hello(){
    console.log("hello world")
}

console.log(hello.prototype);
hello.prototype=[];
console.log(hello.prototype);
hello.prototype.push("1");
hello.prototype.push({1:"hello"})
console.log(hello.prototype)
hello.prototype.about=function(){
    console.log("hello world")
}