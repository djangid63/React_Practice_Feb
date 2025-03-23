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
        params: { query: search || 'Hollywood', limit: 10 },
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
    // console.log("Before dispatch ------ Current favorites:-----", favorites);
    dispatch(addToFav(songData));
    // console.log("After dispatch ------- Action payload:-----", songData);
  }


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
          {songList.map((song) => (
            <li
              key={song.id}
              className="flex items-center justify-between space-x-4 cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md transform hover:-translate-y-1"
              onClick={() => playSong(song)}
            >
              <div className='flex items-center justify-center gap-5'>
                <img
                  src={song.image[2]?.url}
                  alt={song.name}
                  className="w-12 h-12 rounded transition-transform duration-300 hover:scale-110"
                />
                <span className="text-black transition-colors duration-300 hover:text-indigo-600">{song.name}</span>
              </div>
              <div>
                <button onClick={(e) => addFavorite(song, e)}>
                  <FaRegHeart
                    className={`size-5 ${favorites.some(favSong => favSong.id === song.id) ? 'fill-red-500' : ''}`}
                  />
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