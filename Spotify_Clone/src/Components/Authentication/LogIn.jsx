import React ,{useState} from 'react'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, SetPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Log In successfull!");
    setEmail('');
    SetPassword('');
  }

  return (
    <div className='overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 '>
      <nav className='w-full flex items-center justify-start lg:px-56 px-5 py-4 gap-5 border-b border-gray-200 bg-white shadow-sm'>
        <span><TiHeartOutline className='size-10 text-purple-600' /></span>
        <h1 className='text-2xl font-mono font-bold text-gray-800'>Dezzer</h1>
      </nav>
      <div className='max-w-md mx-auto mt-12 px-4'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Enter Your Email</h1>
        <div className='bg-white rounded-lg shadow-lg p-8 border border-gray-100'>
          <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Log In</h2>
          <form className='space-y-5' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='fullname' className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
              <input
                id='fullname'
                name='fullname'
                type='text'
                value={fullName}
                placeholder='Enter your full name'
                onChange={(e) => setfullName(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                value={email}
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
              <input
                id='password'
                name='password'
                type='password'
                value={password}
                placeholder='Create a password'
                onChange={(e) => SetPassword(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-purple-600 text-white font-medium py-3 px-4 rounded-md hover:bg-purple-700 transition duration-300 mt-8 shadow-sm'
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
