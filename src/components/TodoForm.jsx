import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context/TodoContext'




function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()


const add= (e)=>{
    e.preventDefault();

    if(!todo) return

    addTodo({ todo, completed: false})
    setTodo("")
    // console.log(todo);
}


  return (
    <form onSubmit={add} className='flex'>
      <input
      className='w-full px-3 border text-black  border-black/10  rounded-l-lg outline-none duration-150 bg-white/20 py-1.5'
      type="text"
      placeholder="Add your Todo's here..."
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
       />
       <button type='submit' className=' rounded-r-lg px-4 py-2  bg-black text-white shrink-0 ml-1 hover:text-gray-200 hover:bg-gray-900'>
        Add
        </button>
    </form>
  );
}

export default TodoForm
