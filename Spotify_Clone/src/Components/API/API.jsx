import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setError(null);
      try {
        const options = {
          method: 'GET',
          url: 'https://saavn.dev/api/search/songs',
          params: { query: 'Bollywood' }
        };

        const { data } = await axios.request(options);
        setSearchResults(data.data.results || []);
      } catch (error) {
        setError('Failed to fetch songs');
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

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
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl mb-4">Music Player</h2>
      {loading && <p>Loading songs...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {searchResults.map((song) => (
          <li key={song.id} className="flex items-center space-x-4 cursor-pointer" onClick={() => playSong(song)}>
            <img
              src={song.image[0]?.url}
              alt={song.name}
              className="w-12 h-12 rounded"
            />
            <span className="text-white">{song.name}</span>
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
