// async await 
// Consume Promises with async and Await 

// fetch(URL).then((response)=>{
//     return response.json()
// }).then((response2)=>{
//     console.log(response2)
// })

console.log("script start!!!!!");
const URL="https://jsonplaceholder.typicode.com/posts";
// async function getPosts(){

//     const data =  await fetch(URL);
//     if(!data.ok){
//         throw new Error("end point wrong")
//     }
//     const response= await data.json()
//     return response;

// }



const getPosts=async ()=>{

    const data =  await fetch(URL);
    if(!data.ok){
        throw new Error("end point wrong")
    }
    const response= await data.json()
    return response;

}
getPosts().then((value)=>{

    console.log(value)
   
}).catch((error)=>{
    
    console.log(error);
})

console.log("script end!!!!!");
// 



