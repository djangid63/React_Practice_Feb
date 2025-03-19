import React, { useState } from 'react'

const UseCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const multiply = () => setCount(count * count)
  const divide = () => setCount(count / 2)
  const reset = () => setCount(0)

  return {
    count, increment, decrement, multiply, divide, reset
  }
    
  
}

export default UseCounter
