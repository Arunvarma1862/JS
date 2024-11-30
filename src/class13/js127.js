// function returning promise



function ricePromise(){

    return new Promise((resolve,reject)=>{
        const bucket=["rice","vegetables","fruits","orange","salt"];
        if(bucket.includes("salt") &&bucket.includes("vegetables")&& bucket.includes("rice")){
            // resolve("fried rice !!!!");
            resolve({value:"fried Rice!!!!!"})
        }
        else{
            reject("items missing")
        }
    })
}
ricePromise().then((myfriedRice)=>{
    console.log("you can eat",myfriedRice)
}).catch((error)=>{ 
    console.log(error);
    
})