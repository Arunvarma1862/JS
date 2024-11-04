//static list vs live list


//queryselcetorAll hamein static list degi
//getelementsbysomething hamein live list degi

const listitems=document.querySelectorAll(".todo-list li");
const sixthlist= document.createElement("li");
sixthlist.textContent="item6";
const todolist= document.querySelector(".todo-list");
todolist.append(sixthlist);
console.log(listitems);


// const ul=document.querySelector(".todo-list");
// const listitems= ul.getElementsByTagName("li")
// const sixthlist= document.createElement("li");
// sixthlist.textContent="item6";
// ul.append(sixthlist);
// console.log(listitems);

