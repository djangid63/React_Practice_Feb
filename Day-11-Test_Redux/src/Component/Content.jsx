import React from 'react'
import UseDarkMode from './UseDarkMode'



const Content = () => {
  const { isDark, handleApperance } = UseDarkMode()
  console.log(handleApperance);
  return (
    <div>

      <button onClick={handleApperance} className={` h-10 w-50 border-2 border-gray-500 flex flex-col md:flex-row items-center justify-center gap-4 p-6 ${isDark ? "bg-black" : "bg-white"} shadow-md`}>
        Change Theme
      </button>
      <div className={` h-10 w-50 border-2 border-gray-500 flex flex-col md:flex-row items-center justify-center gap-4 p-6 ${isDark ? "bg-black" : "bg-white"} shadow-md`}>

      </div>
    </div>
  )
}

export default Content
