//static list vs live list


//queryselcetorAll hamein static list degi
//getelementsbysomething hamein live list degi

const listitems= document.querySelectorAll(".todo-list li");
console.log(listitems);
const sixthlist= document.createElement("li");
sixthlist.textContent="item6";
const todolist= document.querySelector(".todo-list");
todolist.append(sixthlist);
console.log(listitems);


// const ul=document.querySelector(".todo-list");
// console.log(ul);
// const listitems= ul.getElementsByTagName("li")
// console.log(listitems)
// const sixthlist= document.createElement("li");
// sixthlist.textContent="item6";
// ul.append(sixthlist);
// console.log(listitems);

