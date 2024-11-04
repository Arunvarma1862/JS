
// Add events on multiple elements

const All= document.querySelectorAll("button");
console.log(All);

// for(let a of All){
//     a.addEventListener("click",function(){
//         console.log(this);
//         console.dir(this)
//     })
// }

// for(let i=0;i<All.length;i++){
//     All[i].addEventListener('click',function(){
//         console.log(this)
//     })
// }

All.forEach((function(but){
  but.addEventListener('click',function(){
    console.log(this);
    console.log(this.textContent)
  })
}))