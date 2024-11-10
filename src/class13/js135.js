// Promisifying XHR requests and chaining using then method  

const URL="https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr= new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=()=>{
            if(xhr.status >=200 && xhr.status <300){
                resolve(JSON.parse(xhr.response))
            }
            else{
                reject("404 not found")
            } 
        }
        xhr.onerror=()=>{
            console.log("network error")
        }
        xhr.send()
    })
}
sendRequest("GET",URL).then((response)=>{
    const data=response
    console.log(data);
    return data;
}).then((response2)=>{
    const id= response2[0].id;
    const title=response2[0].title;
    console.log(id,title);
    return id
}).then((id)=>{
    const url=`${URL}/${id}`;
   return  sendRequest("GET",url);
     
}).then((response3)=>{
    console.log(response3)
}).catch((error)=>{
    console.log(error)
})

