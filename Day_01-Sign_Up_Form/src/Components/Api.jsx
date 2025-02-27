import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, [])

  return (
    <div>
      <h1>Api</h1>
      <div>
        {
          data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        }
      </div>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </div>
  )
}

export default Api
