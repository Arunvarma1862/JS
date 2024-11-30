// function excution context 

let foo="foo";
console.log(foo);

function myfunction(firstname,lastname){
    console.log(arguments);
    let myvar=" var in the console";
    console.log(myvar);
    let fullName= firstname +" "+ lastname;
    return fullName;

}

const personName= myfunction("virat","kohil");
console.log(personName)



1. Global Execution Context
Stack View: A stack with one layer labeled Global Execution Context.
Memory Allocation (Creation Phase):
Variables and functions are hoisted.
Example: var x = undefined; and function myFunc() { ... } are added.
Code Execution (Execution Phase):
Assignments are executed: var x = 10;.
2. Function Execution Context
Stack View: The Global Execution Context remains at the bottom, and a new layer labeled Function Execution Context is added above it when a function is called.
Memory Allocation (Creation Phase):
Local variables and parameters are hoisted.
Example: var y = undefined;.
Code Execution (Execution Phase):
Values are assigned: y = 20;.
