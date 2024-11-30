// closures
A closure is a feature in JavaScript where a function retains access to its parent scope, even after the parent function has completed execution. It allows functions to "remember" the environment in which they were created.

// fucntions can return funtions 

function printfullname(firstname,lastname){
    function printname(){
        console.log(firstname, lastname)
    }
    return printname
}
const re= printfullname("virat","kohil");
re()
