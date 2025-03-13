import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: 'ed sheeran',
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'x-rapidapi-key': '8d849cefa5msh7950490e53cb8e7p160066jsnfb6507cfe99f',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setSearchResults(response.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }
    fetchAPI()
  }, [])

  return (
    <div>
      <div className='bg-amber-500 text-9xl'>Hiii</div>
    </div>
  )
}

export default App
