import React, { useState } from 'react'

const NavBar = () => {
  const [search, setSearch] = useState('')
  return (
    <nav>
      <div className='m-4'>
        <label htmlFor='search' className='sr-only' >Search</label>
        <input
          type='text'
          id='search'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Artists, titles, podcasts'
          className='px-6 py-3 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-400 w-full sm:w-80 shadow-sm'
        ></input>
      </div>
    </nav>
  )
}

export default NavBar
