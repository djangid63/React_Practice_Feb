import React, { useEffect } from 'react'
import Counter from './Counter'
import UseCounter from './UseCounter'
import UseTheme from './UseTheme'

const CounterTwo = () => {
  const { count, increment, decrement, multiply, divide, reset } = UseCounter(10)
  const { isDark, toggleIsDark } = UseTheme()


  return (
    <div>
      <div onClick={toggleIsDark} className={` h-screen flex flex-col md:flex-row items-center justify-center gap-4 p-6 ${isDark ? "bg-black" : "bg-white"} rounded-lg shadow-md`}>
        <button
          className="px-4 py-2 text-2xl bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >Change theme</button>
        <div className='text-4xl font-bold bg-white px-6 py-3 rounded-md shadow'>{count}</div>
        <div className='flex gap-2'>
          <button
            className="px-4 py-2 text-2xl bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={increment}>+</button>
          <button
            className="px-4 py-2 text-2xl bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            onClick={decrement}>-</button>
          <button
            className="px-4 py-2 text-lg bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
            onClick={multiply}>Multiply</button>
          <button
            className="px-4 py-2 text-lg bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            onClick={divide}>Divide</button>
          <button
            className="px-4 py-2 text-lg bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            onClick={reset}>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default CounterTwo
