import React, { useState } from 'react'
import NavBar from '../Components/FixedHomeComponents/NavBar'
import SideBar from '../Components/FixedHomeComponents/SideBar'
import Home from '../Components/API/Home'
import MusicPlayer from '../Components/FixedHomeComponents/MusicControl';
import Favorites from '../Components/Main/Favourites';
import Explore from './../Components/Main/Explore';


const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderMain = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'explore':
        return <Explore />
      case 'favorites':
        return <Favorites />
      default:
        return <Home />;
    }
  };

  return (
    <section>
      <div className="relative w-screen h-screen grid grid-cols-10 grid-rows-10 md:grid-rows-6 md:grid-cols-6 gap-0 overflow-x-hidden">
        <div className="h-full w-[15%]  bg-primary border-r-2 border-gray-300 fixed top-0 left-0">
          <SideBar onSectionChange={setActiveSection} activeSection={activeSection} />
        </div>

        <div className="flex items-center justify-between col-span-10 row-span-1 bg-background border-b-2 border-gray-300 fixed z-10 top-0 left-[15%] 2xl:left-[230px] right-0">
          <NavBar />
        </div>

        <div className="pb-20 col-span-8 row-span-8 sm:row-span-6 absolute top-[5%] sm:top-[8%] left-[15%] right-0 ">
          {renderMain()}
        </div>
        <div className="col-span-11 row-span-8 border-t-2 border-gray-300 ">
          <MusicPlayer />
        </div>
      </div>
    </section>
  )
}

export default HomePage