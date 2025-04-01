import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Favorites = () => {
  const { songs } = useSelector((state) => state.favorites)
  return (
    <div className="p-4 bg-white text-black min-h-screen">
      <h2 className="text-2xl mb-4 transition-all duration-300 hover:text-indigo-600">Your Favorites</h2>
      {songs.length === 0 ? (
        <p>No favorite songs yet. Start adding some!</p>
      ) : (
        <ul className="space-y-4">
          {songs.map((song) => (
            <li key={song.id} className="flex items-center justify-between space-x-4 p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md">
              <div className='flex items-center justify-center gap-5'>
                <img src={song.name} alt={song.name} className="w-12 h-12 rounded" />
                <div>
                  <p className="text-black font-medium">{song.name}</p>
                  <p className="text-gray-600 text-sm">{song.primaryArtists.join(',  ')}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Favorites
