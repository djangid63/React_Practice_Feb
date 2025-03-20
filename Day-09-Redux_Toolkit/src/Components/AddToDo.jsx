import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <div className="flex items-center justify-between space-x-3 bg-gray-800 p-4 rounded-lg shadow-md mx-96 pt-2">
      <form onSubmit={addTodoHandler} className='flex items-center justify-between gap-96' >
        <input
          type="text"
          className="bg-gray-700 text-gray-100 border border-gray-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
        >
          Add
        </button>
      </form>
      <button
        type="submit"
        className="bg-purple-700 hover:bg-purple-800 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
        on

      >
        Update
      </button>
    </div>
  )
}

export default AddTodo