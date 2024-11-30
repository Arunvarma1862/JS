// example-3
// The variable count is private to the counter function and cannot be accessed directly.
function func1(){
    let counter=0;
   return function(){
    if(counter<1){
        console.log("hi, I called you");
        counter++;
    }
    else{
        console.log("yeh, already i called you ")
    }
}
}

const myfunc= func1();
myfunc();
myfunc();
myfunc();


// const myfun=func1();
// myfun();
// myfun();
// myfun();
