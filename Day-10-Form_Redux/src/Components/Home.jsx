import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const { firstName, lastName, storedEmail, storedPassword } = useSelector((state) => state.data)
  return (
    <div>
      <h1>Firstname :{firstName}</h1>
      <h1>lastname:{lastName}</h1>
      <h1>Email:{storedEmail}</h1>
      <h1>Password:{storedPassword}</h1>
    </div>
  )
}

export default Home
