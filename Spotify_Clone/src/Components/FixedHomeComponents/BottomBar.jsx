import React from 'react';
// import {
//   HeartIcon,
//   PlusIcon,
//   Bars3Icon,
//   SpeakerWaveIcon,
//   SpeakerXMarkIcon,
//   CogIcon,
//   PlayIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ArrowUturnLeftIcon,
//   ArrowsUpDownIcon,
// } from '@heroicons/react/24';

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 h-20 flex items-center justify-between px-4">
      {/* Left: Track Information */}
      <div className="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Album cover"
          className="w-10 h-10 rounded"
        />
        <div>
          <p className="text-sm font-semibold text-black">Abracadabra</p>
          <p className="text-xs text-gray-600">Lady Gaga</p>
        </div>
        <div className="flex space-x-2">
          {/* <HeartIcon className="w-5 h-5 text-black" /> */}
          {/* <PlusIcon className="w-5 h-5 text-black" /> */}
        </div>
      </div>

      {/* Center: Playback Controls and Progress */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4">
          {/* <ArrowsUpDownIcon className="w-6 h-6 text-black" /> Shuffle */}
          {/* <ChevronLeftIcon className="w-6 h-6 text-black" /> Previous */}
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            {/* <PlayIcon className="w-6 h-6 text-white" /> */}
          </div>
          {/* <ChevronRightIcon className="w-6 h-6 text-black" /> Next */}
          {/* <ArrowUturnLeftIcon className="w-6 h-6 text-black" /> Repeat */}
        </div>
        <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
          <span className="text-xs text-black">00:00</span>
          <div className="flex-1 h-1 bg-gray-300 rounded">
            <div className="w-1/2 h-full bg-purple-500 rounded"></div>
          </div>
          <span className="text-xs text-black">03:43</span>
        </div>
      </div>

      {/* Right: Additional Controls */}
      <div className="flex items-center space-x-4">
        {/* <Bars3Icon className="w-5 h-5 text-black" /> Menu */}
        {/* <SpeakerWaveIcon className="w-5 h-5 text-black" /> Volume */}
        {/* <SpeakerXMarkIcon className="w-5 h-5 text-black" /> Mute */}
        {/* <CogIcon className="w-5 h-5 text-black" /> Settings */}
      </div>
    </div>
  );
};

export default MusicPlayer;