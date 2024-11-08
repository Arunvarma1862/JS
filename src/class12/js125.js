// callbacks in asynchronous programming 
// Callback Hell 
// Pyramid of dom

//callbacks in asynchronous programming 

const heading1= document.querySelector(".heading1");
const heading2= document.querySelector(".heading2");
const heading3= document.querySelector(".heading3");
const heading4= document.querySelector(".heading4");
const heading5= document.querySelector(".heading5");
const heading6= document.querySelector(".heading6");
const heading7= document.querySelector(".heading7");


//callback hell
// setTimeout(()=>{
//     heading1.textContent="heading=1";
//     heading1.style.color="yellow";
//     setTimeout(() => {
//         heading2.textContent="heading=2";
//         heading2.style.color="blue";
//         setTimeout(() => {
//             heading3.textContent="heading=3";
//             heading3.style.color="green";
//             setTimeout(() => {
//                 heading4.textContent="heading=4";
//                 heading4.style.color="violet";
//                 setTimeout(() => {
//                     heading5.textContent="heading=5";
//                     heading5.style.color="purple";
//                     setTimeout(() => {
//                         heading6.textContent="heading=6";
//                         heading6.style.color="cyan";
//                         setTimeout(() => {
//                             heading7.textContent="heading=7";
//                             heading7.style.color="brown";
//                         }, 7000);
//                     }, 6000);
//                 }, 5000);
//             }, 4000);       
//         }, 3000);
//     }, 2000);
// },1000)

// by function

function changeText(element,text,color,time,onSucess,onFailure){
    setTimeout(() => {
        if(element){
            element.textContent=text;
            element.style.color=color;
            if(onSucess){
                onSucess()
            }
        }
        else{
            onFailure()
        }     
    }, time);
   
}
//pyramid of dom
changeText(heading1,"one","yellow",1000,()=>{
    changeText(heading2,"two","green",2000,()=>{
        changeText(heading3,"three","blue",3000,()=>{
            changeText(heading4,"four","violet",2000,()=>{
                changeText(heading5,"five","cyan",2000,()=>{
                    changeText(heading6,"six","brown",2000,()=>{
                        changeText(heading7,"seven","red",2000,()=>{
                        },()=>{
                            console.log("heading7 element not exits")
                        })
                    },()=>{
                        console.log("heading6 element not exits")
                    })
                },()=>{
                    console.log("heading5 element not exits")
                })
            },()=>{
                console.log("heading4 element not exits")
            })
        },()=>{
            console.log("heading3 element not exits")
        })
    },()=>{
        console.log("heading2 element not exits")
    })
},()=>{
    console.log("heading1 element not exits")
})