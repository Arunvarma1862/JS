// fetch API - return promise
// Error Handling in Fetch API 

const URL="https://jsonplaceholder.typicode.com/posts";

fetch(URL).then((response)=>{
    console.log(response)
    // console.log(response.json());
    if(response.ok){
        return response.json()
    }
    else{
        throw new Error("wrong endpoints");      
    }
    
}).then((response2)=>{
     const id= response2[0].id;
     return id ;
}).catch((error)=>{
    console.log("hcbcj")
    console.log(error)
})