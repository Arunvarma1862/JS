// fetch API post 


const URL="https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'food',
      body: 'bar',
      userId: 12333,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response)=>{
   
    if(response.ok){
        return response.json()
    }
    else{
        throw new Error("wrong endpoints");      
    }
    
}).then((response2)=>{
     console.log(response2)
}).catch((error)=>{

    console.log(error)
})