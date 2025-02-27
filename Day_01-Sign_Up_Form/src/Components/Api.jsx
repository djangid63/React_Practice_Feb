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
    <div className="min-h-screen bg-gray-100 py-8 shadow-md shadow-black">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">API Fetched Users Mail Successfully</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        {
          data.slice(1, 5).map((item) => (
            <div
              className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center hover:shadow-lg transition-shadow duration-300"
              key={item.id}
            >
              <p className="text-gray-700 text-lg">{item.email}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Api
