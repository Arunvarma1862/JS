
//  event bubbling/event propagation
//  event capturing
//  evnet delegation


const grandparent= document.querySelector('.grandparent');
const parent= document.querySelector('.parent');
const child= document.querySelector('.child');

// capturing events
// child.addEventListener('click',(e)=>{
//     console.log("capture!!! on child");
   
// },true)
// parent.addEventListener('click',(e)=>{
//     console.log("capture!!!on parent");
   
// },true)
// grandparent.addEventListener('click',(e)=>{
//     console.log("capture!!!on grandparent");
    
// },true)
// document.body.addEventListener('click',()=>{
//     console.log("capture!!! on documentBody")
// },true)


// not capture- event bubbling
// child.addEventListener('click',(e)=>{
//     console.log("bubble on child");
//      e.stopPropagation()
   
// })
// parent.addEventListener('click',(e)=>{
//     console.log("bubble on parent");
    
// })
// grandparent.addEventListener('click',(e)=>{
//     console.log("bubble on grandparent");
 
// })
// document.body.addEventListener('click',()=>{
//     console.log("bubble on documentBody")
// })


// event delegation
// const grandparent= document.querySelector('.grandparent');
grandparent.addEventListener('click',(e)=>{
    // console.log("you clicked something");
    console.log(e);
    console.log(e.target.classList)
    console.log(e.target.textContent)
})