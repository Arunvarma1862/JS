// promise- browser feature - can be asynchronous programming

console.log("script start")
const bucket=["rice","vegetables","fruits","orange","salt"];

const friedRicePromise=new Promise((resolve,reject)=>{
    if(bucket.includes("salt") &&bucket.includes("vegetables")&& bucket.includes("rice")){
        // resolve("fried rice !!!!");
        resolve({value:"fried Rice!!!!!"})
    }
    else{
        reject("items missing")
    }
})

// produce 
// promise 3 stages- pending, fulfilled, reject

//consume
// how to consume- browser consume

friedRicePromise.then((myfriedRice)=>{
    // jab promise resolve
    console.log("you can eat",myfriedRice)
}).catch((error)=>{
    // jab promise reject 
    console.log(error);
    
})
setTimeout(() => {
    console.log("settimout script !!!!!!")
}, 1000);
for(let i=0;i<=100;i++){
    console.log(Math.floor(Math.random()*100),i)
}

console.log("script end!!!")