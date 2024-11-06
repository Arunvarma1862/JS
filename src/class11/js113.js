//event object

// const firstButton=document.querySelector('#one');
// firstButton.addEventListener('click',function(e){
//     console.log(this);
//     console.log(e)
// })


const All= document.querySelectorAll("button");

for(let a of All){
    a.addEventListener("click",function(event){
        // console.log(this);
        // console.dir(this);
        // console.log(this.textContent);
        // console.log(event);
        console.log(event.target);
        console.log(event.currentTarget);
        console.log(event.target.value)

    })
}
