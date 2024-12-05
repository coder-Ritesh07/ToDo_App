import { useState } from "react"
import Header from "./Components/Header"
import ToDoItem from "./Components/ToDoItem"
import { ToDoList,TodoListHeading } from "./Components/ToDoList"

function App() {
  let [todolists,setTodolist]=useState([])
  let editdata;
    function handleinput(inputtask){
      editdata=inputtask
      if(inputtask!==""){
        if(!todolists.includes(inputtask)){
          setTodolist([...todolists,inputtask])
        }
        else{
          alert("Task is Already Exit")
        }
      }
    }
    function deleteTask(key){
      let newTodo=[...todolists];
      newTodo.splice(key,1);
      setTodolist([...newTodo])
    }
    function setEditval(val,idx){
     let newval=[...todolists];
     newval.splice(idx,1,val);
     setTodolist([...newval])
    }
  return (
   <div className="bg-slate-900 h-screen w-full ">
    <Header/>
    <div className="max-w-[90%] mx-auto my-0 flex flex-col justify-center items-center ">
       <ToDoItem handleinput={handleinput}  />
       <TodoListHeading/>
       {todolists.map((val,i)=>{
        return <ToDoList key={i} index={i} deleteTask={deleteTask} setEditval={setEditval}  task={val}/>
       })}
    </div>
   </div>
  )
}

export default App
