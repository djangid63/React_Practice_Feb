import React, { useContext } from 'react'
import { MdSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { SearchContext } from '../UseContext/SearchContext';
import { CiLight, CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../Redux/Slice/toggleAppearance';


const NavBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const isDark = useSelector((state) => state.Mode.isDark)

  const dispatch = useDispatch();
  const handleAppearance = () => {
    dispatch(toggleMode());
  };

  return (
    <nav className={`w-full flex justify-between items-center py-[6px] px-2 sm:p-3 sm:px-6 ${isDark ? 'bg-gray-800' : 'bg-white'}  ${isDark ? 'text-white' : 'text-gray-800'}`}>
      <div className={`flex items-center justify-start rounded-md focus-within:border-purple-400 shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <label htmlFor='search' className='sr-only'>Search</label>
        <MdSearch className={`ml-2 mt-1 sm:size-6 size-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        <input
          type='text'
          id='search'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Artists, titles, podcasts...'
          className={`sm:w-80 w-32 md:px-4 md:py-2 px-[1px] py-[1px] focus:outline-none bg-transparent sm:placeholder:text-base placeholder:text-xs rounded-full font-bold font-mono ${isDark ? 'placeholder:text-gray-400' : 'placeholder:text-gray-500'}`}
        />
      </div>
      <div className='flex justify-center items-center gap-5'>
        <button onClick={handleAppearance}>
          {isDark ? <CiLight className='size-4 sm:size-6 text-white' /> : <CiDark className='size-4 sm:size-6 text-gray-800' />}
        </button>
        <span><FaRegBell className={`size-4 sm:size-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} /></span>
        <span className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs text-center ${isDark ? 'bg-gray-700' : 'bg-white'}`}>DJ</span>
      </div>
    </nav>
  )
}

export default NavBar
