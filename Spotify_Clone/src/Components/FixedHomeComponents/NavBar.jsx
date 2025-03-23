import React, { useContext } from 'react'
import { MdSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { SearchContext } from '../UseContext/SearchContext';
import { useDispatch } from 'react-redux';
import { addToFav } from '../../Redux/Slice/Favourite';

const NavBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const dispatch = useDispatch((state) => state)
  

  return (
    <nav className='w-full flex justify-between items-center my-[6px] mx-2 sm:m-3 sm:mx-6 '>
      <div className='flex items-center justify-start rounded-md focus-within:border-purple-400 bg-primary shadow-sm'>
        <label htmlFor='search' className='sr-only'>Search</label>
        <MdSearch className="ml-2 mt-1 text-gray-500 sm:size-6 size-5" />
        <input
          type='text'
          id='search'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Artists, titles, podcasts...'
          className='sm:w-80 w-32 md:px-4 md:py-2 px-[1px] py-[1px] focus:outline-none bg-transparent sm:placeholder:text-base placeholder:text-xs rounded-full font-bold font-mono'
        />
      </div>
      <div className=' flex justify-center items-center gap-5'>
        <span><FaRegBell className='size-4 sm:size-6' /></span>
        <span className='flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full text-xs text-center'>DJ</span>
      </div>
    </nav>
  )
}

export default NavBar