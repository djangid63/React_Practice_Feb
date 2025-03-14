import React from 'react'
import NavBar from '../Components/FixedHomeComponents/NavBar'

const HomePage = () => {
  return (
    <section>
      <div className="w-screen h-screen grid grid-cols-5 grid-rows-5">
        {/* SideBar */}
        <div className="row-span-4 bg-amber-200">1</div>

        {/* NavBar */}
        <div className="col-span-4"> <NavBar /> </div>

        {/* Main Content */}
        <div className="col-span-4 row-span-3 bg-fuchsia-100">3</div>
        
        {/* BottomBar */}
        <div className="col-span-5 row-start-5 bg-red-700">4</div>
      </div>
    </section>
  )
}

export default HomePage
