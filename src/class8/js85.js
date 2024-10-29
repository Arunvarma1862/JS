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