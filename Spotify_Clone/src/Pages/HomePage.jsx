import React from 'react'
import NavBar from '../Components/FixedHomeComponents/NavBar'

const HomePage = () => {
  return (
    <section>
      <div className="w-screen h-screen grid grid-cols-5 grid-rows-16 sm:grid-rows-10 gap-0 ">
        {/* SideBar */}
        <div className="row-span-15 bg-amber-200">1</div>

        {/* NavBar */}
        <div className="col-span-4 row-span-1 m-0 p-0"> <NavBar /> </div>

        {/* Main Content */}
        <div className="col-span-4 row-span-14 bg-fuchsia-800">3</div>

        {/* BottomBar */}
        <div className=" col-span-5 row-start-16 bg-red-700">4</div>

      </div>
    </section>
  )
}

export default HomePage
