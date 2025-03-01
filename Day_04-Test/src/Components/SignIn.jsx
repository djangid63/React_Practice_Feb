import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
      firstName,
      lastName
    }

    localStorage.setItem('user', JSON.stringify(data));
    setEmail('');
    setPassword('');


  };
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <div className=' flex flex-col justify-center items-center gap-5 border-2 border-amber-400 rounded-3xl px-6 py-8'>
        <div>
          <h1 className='text-3xl'>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
          <div className='flex'>
            <label htmlFor='firstname' className='sr-only'>Name</label>
            <input
              id='firstname'
              name='firstname'
              type='text'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
              className="mr-2 appearance-none relative block w-full px-3 py-3 border border-gray-300  text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow ring-yellow-200 sm:text-sm transition duration-200"
              placeholder='First Name'
            >
            </input>
            <label htmlFor='lastname' className='sr-only'>Last Name</label>
            <input
              id='lastname'
              name='lastname'
              type='text'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required
              className="mr-2 appearance-none relative block w-full px-3 py-3 border border-gray-300 ring-yellow-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow  sm:text-sm transition duration-200"
              placeholder='Last Name'
            >
            </input>
          </div>

          <div className='flex flex-col gap-y-4'>
            <label htmlFor='email' className='sr-only'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mr-2 appearance-none relative block w-full px-3 py-3 border border-gray-300 ring-yellow-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow  sm:text-sm transition duration-200"
              placeholder='Email'
            >
            </input>
            <label htmlFor='password' className='sr-only'>Email</label>
            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mr-2 appearance-none relative block w-full px-3 py-3 border border-gray-300 ring-yellow-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow  sm:text-sm transition duration-200"
              placeholder='Password'
            >
            </input>
          </div>
          <button className='px-3 py-3 ring-1 text-white ring-blue-800 rounded-2xl w-96 bg-blue-600'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
