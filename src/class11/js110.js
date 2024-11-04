// intro to events
// click
// event add karne ke 3 tarike hai


//1
// onclick="console.log("hello world");

//2
// const btn= document.querySelector(".btn-headline");
// but.onclick=function(){
//     console.log("hello world")
// }

//3 add eventlistener
const but= document.querySelector(".btn-headline");
function clickme(){
    console.log("hello world");
    alert("hello world")
    
}
but.addEventListener("click",clickme);
