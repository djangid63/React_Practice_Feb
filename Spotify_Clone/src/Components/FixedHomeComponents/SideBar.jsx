import React from 'react'
import { PiHeartStraightDuotone } from "react-icons/pi";
import { TiHeartOutline } from "react-icons/ti";
import { RiHome5Line } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";


const SideBar = () => {
  return (
    <section className='flex flex-col items-center sm:items-center justify-center my-3 mx-4 gap-5'>
      <PiHeartStraightDuotone className='items-center size-7 sm:size-9 mb-1 mt-1 sm:mb-5 sm:mt-3' color="purple" />
      <div>
        <RiHome5Line className='size-5 sm:size-7' />
      </div>
      <div>
        <FaRegCompass className='size-5 sm:size-7' />
      </div>
      <div>
        <TiHeartOutline className='size-[22px] sm:size-7' />
      </div>
    </section>
  )
}

export default SideBar
