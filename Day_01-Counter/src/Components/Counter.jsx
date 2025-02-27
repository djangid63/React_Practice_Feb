import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => count < 10 ? prevCount + 1 : count)
  }

  const decrement = () => {
    setCount((prevCount) => count > 0 ? prevCount - 1 : count)
    if (count < 1)
      alert('You cannot go below 0')
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='w-[400px] h-[200px] bg-amber-50 border border-amber-50 shadow-2xl flex space-x-4 justify-center items-center'>
        <button onClick={decrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decrement
        </button>
        <span className='text-xl'>{count}</span>
        <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
