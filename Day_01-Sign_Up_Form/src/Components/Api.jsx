import React from 'react'
import { Link } from 'react-router-dom'

const Api = () => {
  return (
    <div>
      <h1>Api</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </div>
  )
}

export default Api
