// how to get the dimensions of the element
// height width 
const sectionTodo= document.querySelector(".section-todo");
// const infos=document.body.getBoundingClientRect();
// const infos=sectionTodo.getBoundingClientRect();
const infos=sectionTodo.getBoundingClientRect().height;
console.log(infos);