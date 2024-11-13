const store={
    todos: [
        {
          id: "1",
          title: "Complete Task A",
          completed: false,
        },
        {
          id: "2",
          title: "Read Book",
          completed: true,
        },
        {
            id:"3",
            title:"write book",
            completed:true
        }
      ],
}
const storeHandler={

  get(target,property){
    // console.log("get the",property);
    return target[property]
  },
  set(target,property,value){
    // console.log(target,property,value);
    // console.log("set the ",property);

    target[property]= value;
    if(property ==="todos"){
      window.dispatchEvent(new Event("todoschange"))
    }
    return true;
  }

}

const storeProxy = new Proxy(store,storeHandler);

 function addTodo(newTodo){
  storeProxy.todos=[...storeProxy.todos,newTodo]
};

function deleteTodo(id){
 storeProxy.todos= storeProxy.todos.filter((todo)=>{ 
  return todo.id != id
})
}

function togglecomplete(id,completed){
  storeProxy.todos= storeProxy.todos.map((todo)=>{
    if(id === todo.id){
      return {...todo,completed:completed}
    }
    else{
      return todo
    }
  })
}

export {addTodo,deleteTodo,togglecomplete}
export default storeProxy;
 