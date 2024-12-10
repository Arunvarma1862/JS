import render from "./render.js";
import store from "./store.js";
import  { addTodo as add, deleteTodo,togglecomplete } from "./store.js";

window.addEventListener("todoschange",()=>{
    console.log("event called");
    render();
});

// try to get store from localStorage
const storefromLocalstorage= JSON.parse(localStorage.getItem("store"));
if(storefromLocalstorage?.todos.length>0){
    store.todos= storefromLocalstorage.todos;
}
else{
    localStorage.setItem("store",JSON.stringify(store));
    render();  // initial render
}

// todos: []  // array is reference types


const form = document.getElementById("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const addTodo= document.querySelector(".todo-form-button");
    const input= document.querySelector(".todo-title-input");
    const data= input.value;
    
   const newTodo={
     id:crypto.randomUUID().slice(0,5),
     title:`${data}`,
     completed:false
   }
    // console.log(newTodo);
    add(newTodo);
    input.value="";

});

const todos= document.querySelector(".todos");
todos.addEventListener("click",(e)=>{
    // console.log(e.target);
    const target= e.target;
    if(target.classList.contains("delete-todo-button")){
        const li= target.closest(".todo").dataset.id;
        // console.log(li);
        deleteTodo(li);
    
        
    }
})

todos.addEventListener("change",(e)=>{
    // console.log(e)
    // console.log(e.target);
    const target= e.target;
    if(target.classList.contains("todo-checkbox"))
 {
    const id= target.closest(".todo").dataset.id;
    const completed= target.checked
    togglecomplete(id,completed)
    // console.log(target.checked);
    // console.log(id)
  }
})
