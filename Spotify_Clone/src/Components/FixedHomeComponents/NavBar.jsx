import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";


const NavBar = () => {
  const [search, setSearch] = useState('')
  return (
    <nav className='w-full' >
      <div className='flex justify-between items-center my-[6px] mx-2 sm:m-3 sm:mx-6 '>
        <div className='flex items-center justify-between rounded-md focus-within:border-purple-400 bg-primary shadow-sm'>
          <label htmlFor='search' className='sr-only'>Search</label>
          <MdSearch className="mx-1 mt-1 text-gray-400 size-5" />
          <input
            type='text'
            id='search'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Artists, titles, podcasts...'
            className='sm:w-80 w-32 md:px-4 md:py-2 px-[1px] py-[1px] focus:outline-none bg-transparent sm:placeholder:text-base placeholder:text-xs rounded-full'
          />
        </div>
        <div className='flex justify-center items-center gap-5'>
          <span><FaRegBell className='size-4 sm:size-6' /></span>
          <span className='flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full text-xs text-center'>DJ</span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar