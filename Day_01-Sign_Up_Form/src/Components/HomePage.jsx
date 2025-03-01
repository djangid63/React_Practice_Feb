import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <Link to="/loginPage">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </Link>
      <Link to="/signupPage">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </Link>
      <Link to="/apiPage">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Fetch API Data
        </button>
      </Link>
      <button onClick={() => {
        if (JSON.parse(localStorage.getItem('user')) == null) {
          alert("No User found!")
        }
        localStorage.clear();
        alert("Creditionals Cleared Successfully")
      }} className="bg-red-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Clear User Creditionals
      </button>
    </div>
  )
}

export default HomePage
