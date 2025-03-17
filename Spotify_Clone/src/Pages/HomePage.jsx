import React from 'react'
import NavBar from '../Components/FixedHomeComponents/NavBar'
import SideBar from '../Components/FixedHomeComponents/SideBar'
import API from '../Components/API/API'
import MusicPlayer from './../Components/FixedHomeComponents/MusicPlayer';

const HomePage = () => {
  return (
    <section>
      <div className="relative w-screen h-screen grid grid-cols-10 grid-rows-10 md:grid-rows-6 md:grid-cols-6 gap-0 overflow-x-hidden">
        {/* ---------- -- SideBar ------------- */}
        <div className="h-full w-[15%] 2xl:w-[10%] bg-primary border-r-2 border-gray-300 fixed top-0 left-0"><SideBar /></div>

        {/* -------------- NavBar -------------- */}
        <div className="flex items-center justify-between col-span-10 row-span-1 bg-background border-b-2 border-gray-300 fixed z-10 top-0 left-[15%] 2xl:left-60 right-0">
          <NavBar />
        </div>

        {/* ------------Main Content ------------- */}
        <div className="col-span-10 row-span-8 sm:row-span-6 absolute top-15 left-60 right-0 ">
          <API />
        </div>

        {/*-------------- BottomBar ----------- */}
        <div className=" col-span-11 row-span-8 border-t-2 border-gray-300 "><MusicPlayer /></div>
      </div>
    </section>
  )
}

export default HomePage
