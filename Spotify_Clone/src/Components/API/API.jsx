import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const App = () => {
  // const [searchTerm, setSearchTerm] = useState('Bollywood'); // Changed to a more generic term
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
          url: 'https://saavn.dev/api/search/songs',
          params: { query: 'Bollywood' }
        };

        const { data } = await axios.request(options);
        console.log(data.data);

        // Extract song results from the search response
        const songs = data.data.results || [];
        setSearchResults(songs);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch songs');
      } finally {
        setLoading(false);
      }
    }

    fetchAPI();
  }, []);


  return (
    <div>
      {searchResults.map((val) => <div>{val.name}</div>)}
    </div>
  )
}

export default App