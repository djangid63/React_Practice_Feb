import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('arijit singh');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioPlayer = useRef(null);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setError(null);
      try {
        const options = {
          method: 'GET',
          url: 'https://saavn.dev/api/songs',
          params: { query: searchTerm }
        };

        const { data } = await axios.request(options);
        console.log(data);
        setSearchResults(data.data.songs?.results || []);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch search results');
      } finally {
        setLoading(false);
      }
    }

    if (searchTerm) {
      fetchAPI();
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    // The search is triggered by the effect when searchTerm changes
  }

  const playTrack = async (track) => {
    setCurrentTrack(track);
    try {
      // Fetch the song details to get audio URL - fixing the API endpoint format
      const { data } = await axios.get('https://saavn.dev/api/songs', {
        params: { id: track.id }
      });

      console.log("Song details:", data);

      // Assuming the API returns downloadable URLs in the response
      if (data.data && data.data[0] && data.data[0].downloadUrl) {
        const audioLinks = data.data[0].downloadUrl;
        // Usually prefer higher quality (higher index)
        const url = audioLinks[audioLinks.length - 1]?.link || audioLinks[0]?.link;
        setAudioUrl(url);

        if (audioPlayer.current) {
          audioPlayer.current.src = url;
          audioPlayer.current.play();
        }
      } else {
        setError("No playable audio found for this track");
      }
    } catch (error) {
      console.error("Error fetching audio:", error);
      // Show more detailed error information
      setError(`Failed to load audio: ${error.response?.status || error.message}`);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Spotify Clone</h1>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Search for songs, artists, albums..."
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Audio Player */}
      {currentTrack && audioUrl && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex items-center">
            <div className="flex-1">
              <p className="font-bold">{currentTrack.title}</p>
              <p className="text-sm">{currentTrack.primaryArtists || currentTrack.singers}</p>
            </div>
            <audio
              ref={audioPlayer}
              src={audioUrl}
              controls
              className="w-1/2"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {searchResults.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => playTrack(item)}
          >
            {item.image && item.image[2] && (
              <img
                src={item.image[2].link || item.image[0].link}
                alt={item.title}
                className="w-full h-40 object-cover mb-2"
              />
            )}
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-gray-600">{item.album}</p>
            <p className="text-sm text-gray-500">{item.singers || item.primaryArtists}</p>
            <button
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm"
              onClick={(e) => {
                e.stopPropagation();
                playTrack(item);
              }}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App