import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../UseContext/SearchContext';
const App = () => {
  const { search } = useContext(SearchContext);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const audioRef = useRef(null);
  const debounceTimeout = useRef(null);

  // Filter songs when search changes
  useEffect(() => {
    if (search && searchResults.length > 0) {
      console.log("Current search:", search);

      const filteredSongs = searchResults.filter(song =>
        song.name.toLowerCase().includes(search.toLowerCase())
      );

      // Update UI with filtered songs
      setSongs(filteredSongs);
    } else {
      // If no search term, show all songs
      if (songs !== searchResults) {
        setSongs(searchResults);
      }
    }
  }, [search, searchResults]);

  const fetchAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method: 'GET',
        url: 'https://saavn.dev/api/search/songs',
        params: { query: search || 'Imagine Dragons', limit: 10 },
      };

      const { data } = await axios.request(options);
      setSearchResults(data.data.results || []);
      setSongs(data.data.results || []); // Initialize songs with all results
      console.log(data.data.results);
    } catch (error) {
      setError('Failed to fetch songs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      fetchAPI();
    }, 300); // Adjust the debounce delay as needed
  }, [search])

  const playSong = (song) => {
    const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.downloadUrl[0];
    if (highestQuality) {
      setCurrentTrack(highestQuality.url);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="p-4 bg-white text-black min-h-screen">
      <h2 className="text-2xl mb-4">Music Player</h2>
      {/* {loading && <p>Loading songs...</p>} */}
      {/* {error && <p className="text-red-500">{error}</p>} */}
      <ul className="space-y-4">
        {songs.map((song) => (
          <li key={song.id} className="flex items-center space-x-4 cursor-pointer " onClick={() => playSong(song)}>
            <img
              src={song.image[2]?.url}
              alt={song.name}
              className="w-12 h-12 rounded"
            />
            <span className="text-black">{song.name}</span>
          </li>
        ))}
      </ul>
      {currentTrack && (
        <audio ref={audioRef} controls autoPlay className="mt-4 w-full">
          <source src={currentTrack} type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default App;