//this keyword inside eventListener callback

const but= document.querySelector(".btn-headline");

but.addEventListener("click",function clickme(){
    console.log("hello world");
    console.log("value of this");
    console.log(this);  // gives button related information
});

but.addEventListener("click",()=>{
    console.log("hello world");
    console.log("value of this");
    console.log(this);  // gives window object
});