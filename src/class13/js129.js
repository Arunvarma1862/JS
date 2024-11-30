// promise.resolve
// promise chaining
// Promise.resolve and more about then method

// ****************promise resolve*****************

// const myPromise= Promise.resolve(5);
// myPromise.then((value)=>{
//     console.log(value)
// })

// then method always returns the promise 



// *********************promise chaining*********************

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}

myPromise().then((value)=>{
    console.log(value);
    value += "bar";
    return value;
    // return Promise.resolve(value);
}).then((value2)=>{
    console.log(value2);
    value2+= "baaaza";
    return value2
}).then((value3)=>{
    console.log(value3)
})