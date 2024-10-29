// hoisting

console.log(this);
console.log(window);
console.log(myfunction);
myfunction()
console.log(fullName);

function myfunction(){
    console.log("its a function");
}

var firstname="virat";
var lastname="kohil";
var fullName=firstname+" "+ lastname;
console.log(fullName);