// How event listener works

const allbuttons= document.querySelectorAll(".my-buttons button");
console.log(allbuttons);

console.log("script starts!!!!")
allbuttons.forEach((function(but){
     but.addEventListener('click',function(event){
        // console.log(this);
        // console.log(event.target);
        let num=0;
        for(let i=0;i<=1000000000;i++){
           num+=i;
        }
        console.log(num);
        console.log(but)
        console.log(event.currentTarget.textContent);
        console.log(event.currentTarget.value)
     })
}))

let value=0;
for(let i=0;i<1000000;i++){
    value+=i
}
console.log("value is ",value)
console.log("script end!!!!")


