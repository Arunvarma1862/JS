
const but= document.querySelector('button');
const body= document.body;
const h1= document.querySelector('h1');
const color=document.querySelector('.current-color')

function randomColor(){
    let red= Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    let blue= Math.floor(Math.random()*256);
    const random= `rgb(${red},${green},${blue})`;
    return random;
}

but.addEventListener('click',(event)=>{
    const ran= randomColor();
    console.log(ran);
    // h1.style.backgroundColor=ran;
     body.style.backgroundColor=ran;
     color.textContent=ran


})
// but.addEventListener('click',function(event){
   
//     // event.currentTarget.style.backgroundColor=`#333${random}`;
//     // event.style.color=`#3333${random}`;
//     //   body.style.backgroundColor=`rgb(${random},${random},${random})`;
//     //  h1.style.backgroundColor=`#9639${random}`;
       
// })