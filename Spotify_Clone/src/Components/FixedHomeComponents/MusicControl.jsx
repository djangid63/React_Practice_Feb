import React, { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../UseContext/SearchContext';
import { FaRegHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { TbMusicCog } from "react-icons/tb";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { PiShuffleLight } from "react-icons/pi";
import { IoIosRepeat } from "react-icons/io";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";

const MusicPlayer = () => {
  const { currentTrack } = useContext(SearchContext);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [favoriotSongs, setFavoriotSongs] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriotSongs(storedFavorites);
  }, []);

  // Play the track when it changes
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error('Playback failed:', e));
    }
  }, [currentTrack]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleFavorites = () => {
    setFavoriotSongs(prevFavoriotSongs => {
      const updatedFavorites = [...prevFavoriotSongs, currentTrack];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-100 to-gray-200 h-16 sm:h-23 flex items-center justify-between px-4 border-t-2 border-gray-300 shadow-lg transition-all duration-300">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Left: Track Information */}
      <div className="flex items-center space-x-5 group">
        <div className='flex items-center justify-center gap-2'>
          <img
            src={currentTrack?.image || "https://placehold.co/40"}
            alt="Album cover"
            className="w-10 h-10 rounded shadow-md transition-transform duration-300 group-hover:scale-110"
          />
          <div className="transition-all duration-300 group-hover:translate-x-1">
            <p className="text-sm font-semibold text-black">{currentTrack?.title || "No track selected"}</p>
            <p className="text-xs text-gray-600">{currentTrack?.artist || "Unknown artist"}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <FaRegHeart onClick={handleFavorites} className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-transform duration-300 hover:scale-125 hover:text-red-500 cursor-pointer" />
          {/* <CiCirclePlus className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer" /> */}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4">
          <PiShuffleLight className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-all duration-300 hover:rotate-180 hover:text-purple-700 cursor-pointer" />
          <RxTrackPrevious className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-all duration-300 hover:scale-125 hover:text-purple-700 cursor-pointer" />
          <div
            className={`w-5 sm:w-10 h-5 sm:h-10 ${isPlaying ? 'bg-purple-600' : 'bg-purple-500'} rounded-full flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-purple-300 hover:shadow-lg ${isPlaying ? 'animate-pulse' : ''}`}
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <IoPauseOutline className="sm:w-6 sm:h-6 text-center text-white transition-all duration-300" />
            ) : (
              <IoPlayOutline className="sm:w-6 sm:h-6 text-center text-white pl-0.5 transition-all duration-300 hover:translate-x-0.5" />
            )}
          </div>
          <RxTrackNext className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-all duration-300 hover:scale-125 hover:text-purple-700 cursor-pointer" />
          <IoIosRepeat className="w-3 sm:w-6 h-3 sm:h-6 text-black transition-all duration-300 hover:rotate-180 hover:text-purple-700 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
          <span className="text-[8px] sm:text-xs text-black">{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 bg-gray-300 rounded overflow-hidden cursor-pointer hover:h-2 transition-all duration-300">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded transition-all duration-300 ease-out"
              style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
            ></div>
          </div>
          <span className="text-[8px] sm:text-xs text-black">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Additional Controls */}
      <div className="flex items-center space-x-4">
        <PiSpeakerHighDuotone className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-transform duration-300 hover:scale-125 cursor-pointer" />
        <HiOutlineSpeakerXMark className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-transform duration-300 hover:scale-125 cursor-pointer" />
        <TbMusicCog className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-all duration-300 hover:rotate-90 cursor-pointer" />
        <FaBarsStaggered className="w-2 sm:w-4 h-2 sm:h-4 text-black transition-all duration-300 hover:scale-125 cursor-pointer" />
      </div>
    </div>
  );
};

export default MusicPlayer;