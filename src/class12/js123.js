const body= document.body;

function randomcolor(){
    const red= Math.floor(Math.random()*255);
    const green= Math.floor(Math.random()*255);
    const blue= Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`
}

const but= document.querySelector('button')
const id=setInterval(()=>{
    body.style.backgroundColor= randomcolor()
},5000);

but.addEventListener('click',()=>{
      clearTimeout(id);
      but.textContent=body.style.backgroundColor
})