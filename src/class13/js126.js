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




// Promise Methods for Concurrent Operations
// JavaScript provides several methods for handling multiple promises at once, each with unique behavior:

// Promise.all(): Takes an array of promises and waits for all to resolve. If any promise is rejected, it rejects the whole array.


// Promise.all([promise1, promise2, promise3])
//   .then((results) => console.log(results))
//   .catch((error) => console.error(error));
// Promise.allSettled(): Returns an array with each promise's result, regardless of whether they resolved or rejected.


const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "foo"));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values)) // Output: [3, "foo", 42] after 2 seconds
  .catch((error) => console.error("One of the promises failed:", error));



// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => console.log(results));
// Promise.race(): Resolves or rejects as soon as the first promise in the array completes.


const promise1 = Promise.resolve(3);
const promise2 = new Promise((_, reject) => setTimeout(reject, 2000, "Error!"));
const promise3 = Promise.resolve(42);

Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  results.forEach((result) =>
    console.log(result.status, result.value || result.reason)
  )
);
// Output: "fulfilled 3", "rejected Error!", "fulfilled 42"


// Promise.race([promise1, promise2])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
const promise2 = new Promise((_, reject) => setTimeout(reject, 200, "Error"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 300, "Last"));

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log("Race result:", result)) // Output: "First"
  .catch((error) => console.error("Race error:", error));

// Promise.any(): Resolves as soon as the first promise in the array fulfills. If all promises reject, it returns an error.

// Promise.any([promise1, promise2])
//   .then((result) => console.log(result))
//   .catch((error) => console.error("All promises were rejected."));


const promise1 = new Promise((_, reject) => setTimeout(reject, 100, "Error1"));
const promise2 = new Promise((_, reject) => setTimeout(reject, 200, "Error2"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 300, "Success"));

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log("Any result:", result)) // Output: "Success" after 300 ms
  .catch((error) => console.error("All promises rejected:", error));
