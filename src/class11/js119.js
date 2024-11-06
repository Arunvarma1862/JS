// const todoform= document.querySelector(".form-todo");
// const text= document.querySelector(".form-todo input[type='text']");
// const value= text.value;

//one way
// todoform.addEventListener('submit',(e)=>{
//      e.preventDefault();
//      const texty = document.querySelector(".todo-list");
//      texty.innerHTML+=`<li><span class="text">${text.value}</span> <div class="todo-buttons">
//                 <button class="todo-btn done">Done</button>
//                 <button class="todo-btn remove">Remove</button>
//             </div></li>`;
//             text.value=""
// })

// second way

const todoform= document.querySelector(".form-todo");
const text= document.querySelector(".form-todo input[type='text']");
const value= text.value;
const todolist = document.querySelector(".todo-list");
todoform.addEventListener('submit',(e)=>{
    e.preventDefault();  
    const newLi = document.createElement('li')
    const newLiinnerHtml=`<span class="text">${text.value}</span> <div class="todo-buttons">
               <button class="todo-btn done">Done</button>
               <button class="todo-btn remove">Remove</button>
           </div>`;
           newLi.innerHTML = newLiinnerHtml;
           todolist.append(newLi)
           text.value=""
})
// using event delagation
todolist.addEventListener('click',(e)=>{
    // console.log(e)
    // console.log(e.target);
   if(e.target.classList.contains("remove")){
      console.log(e.target.parentNode.parentNode)
       const lispan=e.target.parentNode.parentNode
       lispan.remove();
   }
   if(e.target.classList.contains("done")){
        console.log(e.target.parentNode.previousElementSibling);
        const lispan= e.target.parentNode.previousElementSibling;
        // console.log(lispan);
        lispan.style.textDecoration="line-through"
   }
})