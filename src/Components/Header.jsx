function Header()
{
  return (
    <div className="sm:h-20 bg-slate-700 flex justify-start items-center min-[320px]:h-[50px]  min-[425px]:h-[70px]">
       <h1 className="sm:text-4xl font-bold ml-[30px] text-white min-[320px]:text-2xl max-[425px]:text-2xl">ToDoList</h1>
    </div>
  )
}
export default Header;