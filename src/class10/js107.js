//some more old methods to support poor IE(internet explorer);
// appendchild
//insertbefore
//replacechild
//removechild

//append child
// const ul= document.querySelector(".todo-list");
// const li= document.createElement("li");
// li.textContent="todo56";
// ul.appendChild(li);


//insertBefore
// const ul= document.querySelector(".todo-list");
// const li= document.createElement("li");
// const reference= document.querySelector(".first-list")
// li.textContent="todo56";
// ul.insertBefore(li,reference);

//replacechild
// const ul= document.querySelector(".todo-list");
// const li= document.createElement("li");
// const reference= document.querySelector(".first-list")
// li.textContent="todo56";
// ul.replaceChild(li,reference);


//removechild
const ul= document.querySelector(".todo-list");
const reference= document.querySelector(".first-list")
ul.removeChild(reference);