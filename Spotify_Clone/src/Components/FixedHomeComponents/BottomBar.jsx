import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { TbMusicCog } from "react-icons/tb";
import { CgChevronDoubleLeftO } from "react-icons/cg";
import { IoPlayOutline } from "react-icons/io5";
import { PiShuffleLight } from "react-icons/pi";
import { IoIosRepeat } from "react-icons/io";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 h-16 sm:h-23 flex items-center justify-between px-4 border-t-2 border-gray-300">
      {/* Left: Track Information */}
      <div className="flex items-center space-x-2">
        {/* <img
          src="https://via.placeholder.com/40"
          alt="Album cover"
          className="w-10 h-10 rounded"
        /> */}
        <div>
          {/* <p className="text-sm font-semibold text-black">Abracadabra</p>
          <p className="text-xs text-gray-600">Lady Gaga</p> */}
        </div>
        <div className="flex space-x-2">
          <FaRegHeart className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
          <CiCirclePlus className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4">
          <PiShuffleLight className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
          <RxTrackPrevious className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
          <div className="w-5 sm:w-10 h-5 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center text-center">
            {/* <FaPlayCircle   /> */}
            <IoPlayOutline className="sm:w-6 sm:h-6 text-center text-white pl-0.5" />

          </div>
          <RxTrackNext className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
          <IoIosRepeat className="w-3 sm:w-6 h-3 sm:h-6 text-black" />
        </div>
        <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
          <span className="text-[8px] sm:text-xs text-black">00:00</span>
          <div className="flex-1 h-1 bg-gray-300 rounded">
            <div className="w-1/2 h-full bg-purple-500 rounded"></div>
          </div>
          <span className="text-[8px] sm:text-xs text-black">03:43</span>
        </div>
      </div>

      {/* Right: Additional Controls */}
      <div className="flex items-center space-x-4">
        <PiSpeakerHighDuotone className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
        <HiOutlineSpeakerXMark className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
        <TbMusicCog className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
        <FaBarsStaggered className="w-2 sm:w-4 h-2 sm:h-4 text-black" />
      </div>
    </div>
  );
};

export default MusicPlayer;