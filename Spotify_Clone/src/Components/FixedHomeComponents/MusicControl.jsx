import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { TbMusicCog } from "react-icons/tb";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { PiShuffleLight } from "react-icons/pi";
import { IoIosRepeat } from "react-icons/io";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux';
import { addToFav } from '../../Redux/Slice/Favourite';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audio] = useState(new Audio());
  const dispatch = useDispatch()
  const track = useSelector((state) => state.track.songs);
  const favorites = useSelector(state => state.favorites.songs);

  // Play the track when it changes
  useEffect(() => {

    if (track?.downloadUrl) {
      audio.src = track.downloadUrl;
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause()
      }
    }
  }, [track, isPlaying]);



  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audio.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const addFavorite = (song, e) => {
    e.stopPropagation();
    console.log(song);
    let primaryArtist = song.artists.primary.map((artist) => artist.name)
    const songData = {
      id: song.id,
      name: song.name,
      image: song.image[2]?.url,
      primaryArtists: primaryArtist,
      downloadUrl: song.downloadUrl?.find(file => file.quality === '320kbps')?.url || '',
      duration: song.duration,
      year: song.year,
    };
    // console.log("Before dispatch ------ Current favorites:-----", favorites);
    dispatch(addToFav(songData));
    // console.log("After dispatch ------- Action payload:-----", songData);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-100 to-gray-200 h-16 sm:h-23 flex items-center justify-start px-4 border-t-2 border-gray-300 shadow-lg transition-all duration-300">

      {/* Left: Track Information */}
      <div className="flex items-center space-x-5 group">
        <div className='flex items-center justify-center gap-2'>
          <img
            src={track?.image || "https://placehold.co/40"}
            alt="Album cover"
            className="w-10 h-10 rounded shadow-md transition-transform duration-300 group-hover:scale-110"
          />
          <div className="transition-all duration-300 group-hover:translate-x-1">
            <p className="text-sm font-semibold text-black">{track?.name}</p>
            <p className="text-xs text-gray-600">{track?.primaryArtists || "Unknown artist"}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <FaRegHeart onClick={(e) => addFavorite(track.songs[0], e)} className="w-3 h-3 sm:w-5 sm:h-5 text-black transition-transform duration-300 hover:scale-125 hover:text-red-500 cursor-pointer" />
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