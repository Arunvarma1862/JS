

function func2(name){
    console.log("inside function");
    console.log(`your name is ${name}`)
}


function func1(callback){
    console.log("india is my country");
    callback("hello world");
}

func1(func2);