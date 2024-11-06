//more events- mouse event and keypress event

const body= document.body;

// body.addEventListener('keypress',(e)=>{
//    console.log(e);
//    console.log(e.key)
// })

const but= document.querySelector('.btn-headline');
but.addEventListener('mouseover',(e)=>{
   // alert("hello world");
   console.log("mouseover")
   
})

but.addEventListener('mouseleave',(e)=>{
   // alert("hello world");
   console.log("mouseleave")
   
})