import React from 'react'
import { PiHeartStraightDuotone } from "react-icons/pi";
import { TiHeartOutline } from "react-icons/ti";
import { RiHome5Line } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const SideBar = () => {
  const navigateToFavorites = useNavigate();
  navigateToFavorites("/Homepage");
  return (
    <section className='lg:w-full flex flex-col items-center sm:items-start justify-center my-3 mx-2 gap-5'>
      <div className='w-full flex justify-center items-center '>
        <PiHeartStraightDuotone className=' size-7 sm:size-9 mb-1 mt-1 sm:mb-5 sm:mt-3  md:mr-3' style={{ fill: "purple" }} />
      </div>
      <div tabIndex="0" className=' md:w-[90%] flex items-center justify-center xl:justify-start gap-2 px-3 py-1 bg-primary rounded-xl focus-within:text-prPrimary focus-within:border-purple-400 focus-within:bg-purple-200 '>
        <RiHome5Line className='size-5 sm:size-7' style={{ fill: "currentColor" }} />
        <span className='hidden xl:inline'>Home</span>
      </div>
      <div tabIndex="0" className=' md:w-[90%] flex items-center justify-center xl:justify-start gap-2 px-3 py-1 bg-primary rounded-xl focus-within:text-prPrimary focus-within:border-purple-400  focus-within:bg-purple-200 '>
        <FaRegCompass className='size-5 sm:size-7' style={{ fill: "currentColor" }} />
        <span className='hidden xl:inline'>Explore</span>
      </div>
      <div tabIndex="0" className=' md:w-[90%] flex items-center justify-center xl:justify-start gap-2 px-3 py-1 bg-primary rounded-xl focus-within:text-prPrimary focus-within:border-purple-400 focus-within:bg-purple-200 '>
        <TiHeartOutline onClick={navigateToFavorites} className='size-[22px] sm:size-7' style={{ fill: "currentColor" }} />
        <span className='hidden xl:inline'>Favorites</span>
      </div>
    </section>
  )
}

export default SideBar
