import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../UseContext/SearchContext';
import { FaRegHeart } from "react-icons/fa";
const App = () => {
  const { search, setCurrentTrack } = useContext(SearchContext);

  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const debounceTimeout = useRef(null);

  // Filter songs when search changes
  useEffect(() => {
    if (search && searchResults.length > 0) {
      console.log("Current search:", search);

      const filteredSongs = searchResults.filter(song =>
        song.name.toLowerCase().includes(search.toLowerCase())
      );
      setSongs(filteredSongs);
    } else {
      if (songs !== searchResults) {
        setSongs(searchResults);
      }
    }
  }, [search, searchResults]);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://saavn.dev/api/search/songs',
        params: { query: search || 'English', limit: 40 },
      };
      const { data } = await axios.request(options);
      setSearchResults(data.data.results);
      setSongs(data.data.results);
      setLoading(false)
      console.log(data.data.results);

    } catch (error) {
      console.log('Failed to fetch songs');
    }
  };

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
    setCurrentTrack({
      url: highestQuality.url,
      title: song.name,
      artist: song.primaryArtists || "Unknown",
      image: song.image[2]?.url || song.image,
    });
  };

  const getFavoritesList = JSON.parse(localStorage.getItem('favorites'))
  console.log(getFavoritesList);

  return (
    <div className="p-4 bg-white text-black min-h-screen">
      <h2 className="text-2xl mb-4 transition-all duration-300 hover:text-indigo-600">Music Player</h2>
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
          <span className="ml-3">Loading songs...</span>
        </div>
      ) : (
        <ul className="space-y-4">
          {getFavoritesList.map((song) => (
            <li
              key={song.id}
              className="flex items-center justify-between space-x-4 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md transform hover:-translate-y-1"
              onClick={() => playSong(song)}
            >
              <div className='flex items-center justify-center gap-5'>
                <img
                  src={song.image[2]?.url || song.image }
                  alt={song.name || song.title}
                  className="w-12 h-12 rounded transition-transform duration-300 hover:scale-110"
                />

                <span className="text-black transition-colors duration-300 hover:text-indigo-600">{song.name || song.title}</span>
              </div>
              <div>
                {/* <button><FaRegHeart className='size-5' /></button> */}
              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;