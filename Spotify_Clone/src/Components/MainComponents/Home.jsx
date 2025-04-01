import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../UseContext/SearchContext';
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToFav } from '../../Redux/Slice/Favourite'
import { addTrack } from '../../Redux/Slice/CurrentTrack'


const App = () => {
  const { search } = useContext(SearchContext);
  const [songList, setSongList] = useState([]);
  const [loading, setLoading] = useState(false);
  const favorites = useSelector(state => state.favorites.songs);
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.Mode.isDark)


  useEffect(() => {
    if (search) {
      const filteredSongs = songList.filter(song =>
        song.name.toLowerCase().includes(search.toLowerCase())
      );
      setSongList(filteredSongs);
    }
  }, [search]);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://saavn.dev/api/search/songs',
        params: { query: search || 'English', limit: 10 },
      };
      const { data } = await axios.request(options);
      setSongList(data.data.results);
      setLoading(false)

    } catch (error) {
      console.log('Failed to fetch songs');
    }
  };

  const debounceTimeout = useRef(null);
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      fetchAPI();
    }, 300);
  }, [search])



  const playSong = (song) => {
    const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.url;
    const primaryArtist = song.artists.primary.map((artist) => artist.name)

    const track = {
      id: song.id,
      name: song.name,
      image: song.image[2]?.url,
      primaryArtists: primaryArtist,
      downloadUrl: highestQuality.url,
      duration: song.duration,
      year: song.year,
    }
    dispatch(addTrack(track))

  };

  const addFavorite = (song, e) => {
    e.stopPropagation();

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
    dispatch(addToFav(songData));
  }


  return (
    <div className={`p-6 ${isDark ? 'bg-gradient-to-br from-gray-900 to-purple-900 text-gray-200' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'} h-[100%] animate-fadeIn`}>
      <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-700'} animate-slideDown`}>
        Music Player
      </h2>

      {loading ? (
        <div className="h-screen flex items-start justify-center py-12 ">
          <div className={`animate-spin rounded-full h-16 w-16  border-b-4 ${isDark ? 'border-purple-400 shadow-lg shadow-purple-500/50' : 'border-purple-600 shadow-lg shadow-purple-500/30'}`}></div>
          <span className={`ml-4 ${isDark ? 'text-purple-400' : 'text-purple-600'} font-medium animate-pulse`}>Loading songs</span>
        </div>
      ) : (
        <ul className="space-y-3 pb-20">
          {songList.map((song, index) => (
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
                    src={song.image[2]?.url}
                    alt={song.name}
                    className={`w-16 h-16 object-cover shadow-md ${isDark ? 'group-hover:shadow-purple-400/30' : 'group-hover:shadow-purple-500/30'} transition-transform duration-500 group-hover:scale-110`}
                  />
                  <div className={`absolute inset-0 ${isDark ? 'bg-purple-400/20' : 'bg-purple-500/20'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    <svg className="w-8 h-8 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className={`font-medium text-lg ${isDark ? 'text-gray-200 group-hover:text-purple-400' : 'text-gray-800 group-hover:text-purple-700'} transition-colors duration-300`}>{song.name}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'} transition-colors duration-300`}>
                    {song.artists?.primary?.map(artist => artist.name).join(', ')}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}
                </span>
                <button
                  onClick={(e) => addFavorite(song, e)}
                  className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors relative overflow-hidden group`}
                >
                  <FaRegHeart
                    className={`w-5 h-5 transition-all duration-300 ${favorites.some(favSong => favSong.id === song.id)
                      ? 'text-red-500 fill-red-500 animate-heartBeat'
                      : isDark ? 'text-gray-400 group-hover:text-red-400' : 'text-gray-500 group-hover:text-red-400'
                      }`}
                  />
                  <span className={`absolute inset-0 rounded-full ${favorites.some(favSong => favSong.id === song.id) ? 'animate-circleOut bg-red-500/20' : 'bg-transparent'
                    }`}></span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;