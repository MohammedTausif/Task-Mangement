import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";


function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const{updateTodo, deleteTodo, toggleComplete}= useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {

        toggleComplete(todo.id)

    }

  return (
    <div className={`flex min-h-full bg-white gap-3 items-center `}>
    
         <input
        type="checkbox"
        className='cursor-pointer  size-4'
        checked={todo.completed}
        onChange={toggleCompleted} 
        />
       <div className=' gap-1 w-full flex justify-between'>
        <input 
        type="text"
        className={` text-black h-10 border outline-none rounded-lg shadow-md  text-md w-full ${
          isTodoEditable ? "border-gray-50 px-3 text-lg" : ""}
          ${todo.completed ? "line-through text-gray-600 bg-gray-200  " : ""}
          `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        /> 
        {/* edit and save button */}


      <div className='flex gap-5 items-center '>
          <button 
        className='inline-flex text-black text-xl justify-between'
        disabled={todo.completed}
        onClick={()=> {
            if(todo.completed)  return;
            if (isTodoEditable){
                editTodo();
            } else setIsTodoEditable((prev)=> !prev);
        }}
        > 
    {isTodoEditable  ? "📂" : <BiSolidEditAlt className='text-black' size={28}/>}
        </button>

         {/* delete todo button */}

         <button
          className='w-8 text-black  h-8 rounded-lg text-sm  border-black/10 justify-center items-center'
          onClick={()=> deleteTodo(todo.id)}
         >
          <MdDeleteForever size={26} />
         </button> </div> 
         </div>

    </div>
  );
}

export default TodoItem
