import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="h-30 flex justify-center items-center  gap-5">
      <Link to={"/login"}>
        <button className="px-5 py-2.5 text-base bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
          Log In
        </button>
      </Link>
      <Link to={"/signup"}>
        <button className="px-5 py-2.5 text-base bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
          Sign In
        </button>
      </Link>
      <Link to={"/api"}>
        <button className="px-5 py-2.5 text-base bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">
          API
        </button>
      </Link>
      <button onClick={() => {
        localStorage.clear();
        alert("Cleared")
      }
      } className="px-5 py-2.5 text-base bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">
        Log out
      </button>
    </div >
  )
}

export default HomePage
