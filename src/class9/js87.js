// closures

// fucntions can return funtions 

function printfullname(firstname,lastname){
    function printname(){
        console.log(firstname, lastname)
    }
    return printname
}
const re= printfullname("virat","kohil");
re()