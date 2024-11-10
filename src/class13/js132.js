// XHR requests 

const URL= "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
// console.log(xhr)

// STEP1
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         // console.log(xhr.readyState);
//         // console.log(xhr.response);
//         // console.log(typeof xhr.response);
//         const response= xhr.response;
//         const data= JSON.parse(response);
//         console.log(data);
//         console.log(typeof data)
//         console.log(data[0].title)
//     }
// }

xhr.onload=function(){
        console.log(xhr.readyState);
        console.log(xhr.response);
        console.log(typeof xhr.response);
        const response= xhr.response;
        const data= JSON.parse(response);
        console.log(data);
        console.log(typeof data)
        console.log(data[0].title)
}
xhr.send()