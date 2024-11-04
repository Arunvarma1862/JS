//document.create element()
//append
// prepend
// remove


                            // one way
// const newTodoItem= document.createElement("li");
// const newTodolistText=document.createTextNode("Todo5");
// const todolist= document.querySelector(".todo-list");
// newTodoItem.append(newTodolistText);
// todolist.append(newTodoItem);
// todolist.prepend(newTodoItem);// add at first
// console.log(newTodoItem);


                     // second way--- append and prepend
// const newTodoItem= document.createElement("li");
// newTodoItem.textContent="Todo5"
// const todolist= document.querySelector(".todo-list");
// // todolist.append(newTodoItem);
// todolist.prepend(newTodoItem)
// console.log(newTodoItem);


// remove
// const todo5= document.querySelector(".todo-list li");
// console.log(todo5);
// todo5.remove()


//before
//after

const todolist= document.querySelector(".todo-list");
console.log(todolist);
const newTodoItem= document.createElement("li");
newTodoItem.textContent="hello world";
// todolist.before(newTodoItem);
todolist.after(newTodoItem)

