import React from 'react'
import UseDarkMode from './UseDarkMode'



const Content = () => {
  const { isDark, handleApperance, isFlex, handleFlex } = UseDarkMode()

  return (
    <div>
      <div className='flex'>
        <button onClick={handleApperance} className={` h-10 w-[50%] border-2 border-gray-500 flex flex-col md:flex-row items-center justify-center gap-4 p-6 ${isDark ? "bg-black" : "bg-white"} ${isDark ? "text-white" : "text-black"}  shadow-md`}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={handleFlex} className={` h-10 w-[50%] border-2 border-gray-500 flex flex-col md:flex-row items-center justify-center gap-4 p-6   ${isDark ? "bg-black" : "bg-white"} ${isDark ? "text-white" : "text-black"} shadow-md`}>
          {isFlex ? "Row" : "Column"}
        </button>
      </div>
      <div className={`h-screen w-screen  ${isFlex ? "flex" : "flex-col"} items-center jusc border-2 border-gray-500  gap-4 p-6 ${isDark ? "bg-black" : "bg-white"} shadow-md`}>
        <div className='w-52 h-52 border-5 border-gray-400' ></div>
        <div className='w-52 h-52 border-5 border-gray-400'></div>
        <div className='w-52 h-52 border-5 border-gray-400'></div>
        <div className='w-52 h-52 border-5 border-gray-400'></div>
        <div className='w-52 h-52 border-5 border-gray-400'></div>
        <div className='w-52 h-52 border-5 border-gray-400'></div>
        <div className='w-52 h-52 border-5 border-gray-400'></div>
      </div>
    </div>
  )
}

export default Content
