import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState({ show: false, message: "", type: "" })
  const navigateAPI = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      emailOrUsername,
      password,
    }

    const userData = JSON.parse(localStorage.getItem('user'))

    if (!userData) {
      setAlert({
        show: true,
        message: "Please create an account to continue",
        type: "error"
      })
      return
    }

    if (
      (userData.email === data.emailOrUsername || userData.username === data.emailOrUsername) &&
      userData.password === data.password
    ) {
      setAlert({
        show: true,
        message: "Login successful!",
        type: "success"
      })
      setTimeout(() => {
        navigateAPI("/api")
      }, 1000);
      setEmailOrUsername('')
      setPassword('')
    } else {
      setAlert({
        show: true,
        message: "Invalid credentials",
        type: "error"
      })
    }

    // Auto-hide alert after 3 seconds
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" })
    }, 3000)
  }
  return (
    <section className='flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>Welcome</h1>
        <h2 className='text-lg text-gray-600'>Come on and create an account</h2>
      </div>

      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-6'>
            <label htmlFor='emailOrUsername' className='text-sm font-semibold text-gray-600 mb-1'>Email or Username</label>
            <input
              id='emailOrUsername'
              name='emailOrUsername'
              type='text'
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className='py-2 px-3 rounded-md border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition duration-200'
              placeholder='Email or Username'
            />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor='password' className='text-sm font-semibold text-gray-600 mb-1'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='py-2 px-3 rounded-md border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition duration-200'
              placeholder='••••••••'
              autoComplete='new-password'
            />
          </div>

          <div>
            <Link to={"/api"}>
              <button className='w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-200 font-semibold'>
                Log In
              </button>
            </Link>

          </div>
        </form>

        {alert.show && (
          <div className={`mt-4 p-4 rounded-md ${alert.type === 'error'
            ? 'bg-red-100 text-red-700 border border-red-500'
            : 'bg-green-100 text-green-700 border border-green-500'
            }`}>
            {alert.message}
          </div>
        )}
      </div>
    </section>
  )
}

export default LogIn
