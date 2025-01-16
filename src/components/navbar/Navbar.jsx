import React from 'react'

function Navbar() {

var date = new Date();
date.setHours(0, 0, 0, 0);

var dateWithoutTime = date.toDateString();
console.log(dateWithoutTime);
  return (
    <nav className='w-full flex  text-black border-b-0  h-16'>
    <div className='flex w-full items-center px-3 justify-between'>
      <h1 className='text-3xl font-semibold cursor-pointer hover:text-gray-700'><span className='text-indigo-500 font-serif '>i</span>Task</h1>
      <ul className='flex '>
        <li className='text-sm cursor-auto mt-1.5 px-3 font-semibold'> {dateWithoutTime}  </li> 
      </ul>
    </div>
    
  
     </nav>
  )
}

export default Navbar
