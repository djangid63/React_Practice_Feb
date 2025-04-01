import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaHeart, FaPlay, FaPause } from 'react-icons/fa'
// import { removeFromFav } from '../../Redux/Slice/Favourite'
import { addTrack } from '../../Redux/Slice/currentTrack'

const Favorites = () => {
  const { songs } = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const isDark = useSelector((state) => state.Mode.isDark)

  const handleRemoveFavorite = (songId, e) => {
    e.stopPropagation()
    dispatch(removeFromFav(songId))
  }

  const playSong = (song) => {
    dispatch(addTrack(song))
    setCurrentlyPlaying(song.id)
  }

  return (
    <div className={`p-6 h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 to-purple-900 text-gray-200' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'} h-[100%] animate-fadeIn`}>
      <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-700'} animate-slideDown`}>
        Your Favorites
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{songs.length} saved songs</p>

      {songs.length === 0 ? (
        <div className={`flex flex-col items-center justify-center h-64 ${isDark ? 'bg-gray-800/30' : 'bg-white/60'} rounded-lg p-10 animate-fadeIn`}>
          <FaHeart className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-5xl mb-4`} />
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-xl font-semibold`}>Your favorites collection is empty</p>
          <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'} mt-2`}>Start adding songs you love to your favorites!</p>
        </div>
      ) : (
        <ul className="space-y-3 pb-20">
          {songs.map((song, index) => (
            <li
              key={song.id}
              className={`flex items-center justify-between p-4 rounded-xl ${isDark
                ? 'bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 hover:border-purple-500'
                : 'bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                } cursor-pointer transition-all duration-300 shadow-sm hover:scale-[1.02] ${isDark ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-300/20'} animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => playSong(song)}
            >
              <div className='flex items-center gap-4'>
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={song.image || "https://placehold.co/400"}
                    alt={song.name}
                    className={`w-16 h-16 object-cover shadow-md ${isDark ? 'group-hover:shadow-purple-400/30' : 'group-hover:shadow-purple-500/30'} transition-transform duration-500 group-hover:scale-110`}
                  />
                  <div className={`absolute inset-0 ${isDark ? 'bg-purple-400/20' : 'bg-purple-500/20'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    {currentlyPlaying === song.id ? (
                      <FaPause className="w-8 h-8 text-white" />
                    ) : (
                      <FaPlay className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className={`font-medium text-lg ${isDark ? 'text-gray-200 group-hover:text-purple-400' : 'text-gray-800 group-hover:text-purple-700'} transition-colors duration-300`}>{song.name}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'} transition-colors duration-300`}>
                    {Array.isArray(song.primaryArtists)
                      ? song.primaryArtists.join(', ')
                      : song.primaryArtists || "Unknown artist"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}
                </span>
                <button
                  onClick={(e) => handleRemoveFavorite(song.id, e)}
                  className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors relative overflow-hidden group`}
                >
                  <FaHeart
                    className={`w-5 h-5 text-red-500 fill-red-500 transition-all duration-300 animate-heartBeat`}
                  />
                  <span className="absolute inset-0 rounded-full animate-circleOut bg-red-500/20"></span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Favorites