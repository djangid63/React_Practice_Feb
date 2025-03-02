import React from 'react'
import { useState } from 'react'

const SignUp = () => {

  const [fullName, setfullName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      fullName,
      username,
      email,
      password,
      confirmPassword
    }

    localStorage.setItem('user', JSON.stringify(data))
    setfullName('')
    setUsername('')
    setfullName('')
    setPassword('')


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
            <label htmlFor='fullName' className='text-sm font-semibold text-gray-600 mb-1'>Full Name</label>
            <input
              id='fullName'
              name='fullName'
              type='text'
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              className='py-2 px-3 rounded-md border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition duration-200'
              placeholder='Devesh'
            />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor='userName' className='text-sm font-semibold text-gray-600 mb-1'>Username</label>
            <input
              id='userName'
              name='userName'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='py-2 px-3 rounded-md border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition duration-200'
              placeholder='djangid'
            />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor='email' className='text-sm font-semibold text-gray-600 mb-1'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='py-2 px-3 rounded-md border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition duration-200'
              placeholder='devesh@gmail.com'
            />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor='password' className='text-sm font-semibold text-gray-600 mb-1'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={(e) => setEmail(e.target.value)}
              className='py-2 px-3 rounded-md border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition duration-200'
              placeholder='••••••••'
            />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor='password' className='text-sm font-semibold text-gray-600 mb-1'>Confirm Password</label>
            <input
              id='password'
              name='password'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='py-2 px-3 rounded-md border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition duration-200'
              placeholder='••••••••'
            />
          </div>

          <div>
            <button className='w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-200 font-semibold'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SignUp
