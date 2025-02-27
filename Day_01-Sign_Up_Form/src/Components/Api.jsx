import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

  return (
    <div>
      <h1>Api</h1>
      <div>
        {
          data.slice(1, 4).map((item) => (
            <div className='flex justify-center items-center' key={item.id}>
              {item.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Api
