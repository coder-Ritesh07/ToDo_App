import { useRef, useState } from "react";

export function ToDoList(props){
  let [isComplete,setIsComplete]=useState(false)
  let myEle=useRef(null)
  function handleCheckbox(){
    setIsComplete(!isComplete)
  }
  function deleteTask(){
    props.deleteTask(props.index)
  }
  function editTask(){
    let ele=myEle.current.innerText
    let resval=prompt("Enter Your Edit Task-",`${ele}`)
    props.setEditval(resval,props.index)
  }
    return(
        <>
        <div id="todoitem" className="flex justify-between items-center gap-x-1.5 bg-slate-500 sm:w-[530px] min-[320px]:w-[280px] min-[375px]:w-[280px] min-[425px]:w-[360px] min-[475px]:w-[390px]  rounded-md  mt-5">
            {/* TODO Item */}
         <div id="checkbox">
            <input type="checkbox" checked={isComplete} onChange={handleCheckbox} className="w-4 h-4 ml-2 accent-green-500 rounded-md"/>
         </div>
          <div id="tasks" className="sm:w-[430px] h-[60px] flex  items-center  overflow-auto p-1 text-black ">
          <li className={`list-none min-[320px]:leading-tight min-[320px]:font-medium min-[320px]:text-[1.2rem]  sm:font-semibold sm:text-[1.4rem] text-black ${isComplete ? 'line-through' : ''}`} ref={myEle}>
          {props.task}
        </li>
          </div>
          <div id="btns" className="flex sm:gap-x-1 min-[320px]:gap-x-[2px]">
            <span className="sm:text-3xl min-[320px]:text-[1.4rem] min-[425px]:text-2xl font-medium text-white "><i className="ri-pencil-line  hover:text-green-800 " onClick={(e)=>{
              return editTask(e)
            }} ></i></span>
            <span className="sm:text-3xl min-[320px]:text-[1.4rem] min-[425px]:text-2xl font-medium text-white "><i className="ri-delete-bin-line hover:text-red-400" onClick={deleteTask}></i></span>
          </div>
          
        </div>
        </>
    )
}
export function TodoListHeading(){
  return(
    <>
    <h1 className="sm:text-3xl font-bold text-white mt-3 min-[320px]:text-[20px]">ToDo List</h1>
    </>
  )
}

