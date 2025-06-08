import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [str, setStr] = useState('')
  const [option, setOption] = useState('')

  if (option) {
    console.log(option);
  }

  const findPrime = async () => {
    try {
      const start = 10;
      const end = 18;
      const resp = await axios.get(`http://localhost:5000/prime?start=${start}&end=${end}`);
      console.log(resp.data.primes);
    } catch (error) {
      console.log(error);
    }
  }

  const reverseStr = async (str) => {
    try {
      // const str = "Devesh is a full stack developer";
      const resp = await axios.get(`http://localhost:5000/reverse?str=${str}`)
      console.log(resp.data.reversedStr);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (option == 'Prime array') {
      findPrime()
    } else if (option == 'Longest word') {
      reverseStr(str)
    }

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-10'>
          <label htmlFor='str'></label>
          <input
            id='str'
            type='text'
            value={str}
            onChange={(e) => setStr(e.target.value)}
            placeholder='write any thing to apply'
            className='border-2 border-amber-600 rounded-2xl p-4'
          >
          </input>

          <div>
            <label htmlFor="options" className="mr-2 text-sm font-medium text-gray-700">Select</label>
            <select
              id="options"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Prime array">Prime array (Start and End Point)</option>
              <option value="Longest word">Longest word in String</option>
              <option value="date-newest"></option>
              <option value="date-oldest"></option>
            </select>
          </div>

          <div>
            <button className='p-5 bg-blue-300 rounded-2xl' type='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
