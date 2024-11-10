// Error handling in XHR requests

const URL="https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();

xhr.open("GET",URL);
xhr.onload=function(){

    if(xhr.status >=200 && xhr.status <300){
        const response= xhr.response;
       const data= JSON.parse(response);
       console.log(data) ;
      
    }
    else{
        console.log("something went wrong")
    }
   
}

xhr.onerror=()=>{
    console.log("network error")
}
xhr.send()