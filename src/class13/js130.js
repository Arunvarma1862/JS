// Convert nested Callbacks to flat code using promises


const heading1= document.querySelector(".heading1");
const heading2= document.querySelector(".heading2");
const heading3= document.querySelector(".heading");
const heading4= document.querySelector(".heading4");
const heading5= document.querySelector(".heading5");
const heading6= document.querySelector(".heading6");
const heading7= document.querySelector(".heading7");



function changeText(element,text,color,time){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve()  
            }
            else{ 
                reject("heading")
            }     
        }, time);
       
    })
    
}


changeText(heading1,"one","yellow",1000).then(()=>{
   return changeText(heading2,"two","red",1000);
}).then(()=>changeText(heading3,"three","blue",1000))
.then(()=>{
    return changeText(heading4,"four","green",1000);
}).then(()=>{
    return changeText(heading5,"five","purple",1000);
}).then(()=>{
    return changeText(heading6,"six","violet",1000);
}).then(()=>{
    return changeText(heading7,"seven","cyan",1000);
}).catch((value)=>{
    alert(`${value} element doesn't exits`)
})