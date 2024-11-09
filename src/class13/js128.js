// promise && setTimeout

//i want to resolve/reject  promise after 2 seconds

function ricePromise(){
   return new Promise((resolve,reject)=>{

    setTimeout(() => {
        const value =true;
        if(value){
            resolve("resolved!!!!!")
        }
        else{
            reject("rejected!!!!!!")
        }
    }, 2000);
   })
}
ricePromise().then((myfriedRice)=>{
    console.log(myfriedRice)
}).catch((error)=>{
    console.log(error)
})