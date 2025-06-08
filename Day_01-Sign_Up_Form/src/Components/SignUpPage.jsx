import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      firstName,
      lastName
    }

    localStorage.setItem('user', JSON.stringify(data));
    setEmail('');
    setPassword('');


  };
  console.log(JSON.parse(localStorage.getItem('user')));
  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className='flex'>
              <label htmlFor='First name' className="sr-only">Name</label>
              <input
                id='First name'
                name='name'
                type='text'
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                required
                className="mr-2 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-yellring-yellow-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow ring-yellow-200 sm:text-sm transition duration-200"
                placeholder='First Name'
              />
              <label htmlFor='lastName' className="sr-only">Last Name</label>
              <input
                id='lastName'
                name='lastName'
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-yellring-yellow-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow ring-yellow-200 sm:text-sm transition duration-200"
                placeholder='Last Name'
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-yellring-yellow-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow ring-yellow-200 sm:text-sm transition duration-200"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-yellring-yellow-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow ring-yellow-200 sm:text-sm transition duration-200"
                placeholder="Password"
              />
            </div>
          </div>


          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-yellow-300 focus:ring-yellow-200 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-yellow-600 hover:text-yellring-yellow-200"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white hover:bg-yellow-300 bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200 transition duration-200"
            >
              Sign in
            </button>
          </div>
          <Link to="/loginPage">
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have a Account?{' '}
              <button
                href="#"
                className="font-medium text-yellow-600 hover:text-yellow ring-yellow-200"
              >
                Log in
              </button>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;