// XHR requests 

// const URL= "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();
// console.log(xhr)

// STEP1
// console.log("0",xhr.readyState);
// xhr.open("GET",URL);
// console.log("1",xhr.readyState);
// xhr.onreadystatechange=function(){
//      console.log("2,3,4",xhr.readyState);
//     if(xhr.readyState===4){
        // console.log(xhr.readyState);
        // console.log(xhr.response);
        // console.log(typeof xhr.response);
//         const response= xhr.response;
//         const data= JSON.parse(response);
//         console.log(data);
//         console.log(typeof data)
//         console.log(data[0].title)
//     }
// }
// xhr.send()



const URL= "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
console.log(xhr)
xhr.open("GET",URL);
xhr.onload=function(){
        console.log(xhr.readyState);
        console.log(xhr.response);
        console.log(typeof xhr.response);  // string
        const response= xhr.response;
        const data= JSON.parse(response);
        console.log(data);
        console.log(typeof data)    // object
        console.log(data[0].title)
}
xhr.send()