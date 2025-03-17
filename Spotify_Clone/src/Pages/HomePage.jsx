import React from 'react'
import NavBar from '../Components/FixedHomeComponents/NavBar'
import SideBar from '../Components/FixedHomeComponents/SideBar'
import BottomBar from '../Components/FixedHomeComponents/BottomBar'
import API from '../Components/API/API'

const HomePage = () => {
  return (
    <section>
      <div className="w-screen h-screen grid grid-cols-10 grid-rows-10 md:grid-rows-8 md:grid-cols-6 gap-0 overflow-x-hidden">
        {/* SideBar */}
        <div className="w-full row-span-9 sm:row-span-7 bg-primary border-r-2 border-gray-300"><SideBar /></div>

        {/* NavBar */}
        <div className=" flex items-center justify-between col-span-10 row-span-1 border-b-2 border-gray-300"> <NavBar /> </div>

        {/* Main Content */}
        <div className="col-span-10 row-span-8 sm:row-span-6 bg-red-300">
          <API />
        </div>

        {/* BottomBar */}
        <div className="col-span-11 row-span-8 border-t-2 border-gray-300"><BottomBar /></div>
      </div>
    </section>
  )
}

export default HomePage
