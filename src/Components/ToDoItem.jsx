import { useState } from "react";
function ToDoItem(props){
    let [tasks,setTask]=useState('');
    function addTask(e){
      setTask(e.target.value)
    }
      function handleTask(){
        props.handleinput(tasks)
        setTask("")
      } 
    
    return (
        <>
           <div>
            <input type="text" value={tasks} className="sm:w-[450px] h-12 bg-white mt-10 font-semibold pl-3 text-xl rounded-md focus:outline-none focus:shadow-[0px,0px,5px,0px,red] min-[320px]:w-52 min-[425px]:w-72 min-[475px]:w-80" onChange={(e)=>{
                return addTask(e)
            }} placeholder="Enter Your Task" required />
            <button  className="text-black h-11 w-14 ml-5 font-extrabold rounded-md text-3xl border-3 border-slate-300 bg-white" onClick={handleTask}><i className="ri-add-line"></i></button>
             {/* <h1>{props.editval}</h1> */}
            {/* <ToDoList/> */}
           </div>
        </>
    )
}
export default ToDoItem;