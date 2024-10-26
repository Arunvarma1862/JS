// block scope vs function scope
// let and const are block scope
// var is function scope

{
  let firstName = "India";
  console.log(firstName);
}
//   console.log(firstName);

//lexical scope

function func1() {
  const var1 = "india";
  console.log(var1);
}
func1();

// if type

if (true) {
  const var2 = "india";
}
console.log(var2);
