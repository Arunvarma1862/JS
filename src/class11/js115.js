const allbuttons= document.querySelectorAll(".my-buttons button");
// console.log(allbuttons);

allbuttons.forEach((function(but){
   but.addEventListener('click',function(event){
        event.currentTarget.style.backgroundColor="blue";
        event.currentTarget.style.color="violet";

   })
}))
