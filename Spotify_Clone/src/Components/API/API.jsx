import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../UseContext/SearchContext';
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
    const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.downloadUrl[0];
    setCurrentTrack({
      url: highestQuality.url,
      title: song.name,
      artist: song.primaryArtists,
      image: song.image[2]?.url
    });

  };

  return (
    <div className="p-4 bg-white text-black min-h-screen ">
      <h2 className="text-2xl mb-4">Music Player</h2>
      {loading && <p>Loading songs...</p>}
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
      {/* {currentTrack && (
        <audio controls autoPlay className="mt-4 w-20">
          <source src={currentTrack} type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
      )} */}
    </div>
  );
};

export default App;