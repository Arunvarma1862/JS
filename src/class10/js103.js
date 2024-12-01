//  Add new html elements to page

//  innerhtml to add html element- when you should use, when not be used

const todolist= document.querySelector(".todo-list");
console.log(todolist);
console.log(todolist.innerHTML);
todolist.innerHTML+="<li>New Todo</li>";
console.log(todolist.innerHTML)


