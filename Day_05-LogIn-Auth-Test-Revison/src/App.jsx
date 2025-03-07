import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Api from './Components/Api'
import FakeStoreAPI from './Components/FakeStoreAPI'
import PrivateRoute from './Components/PrivateRoute'

const App = () => {
  const userData = localStorage.getItem('user') ? true : false;

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">My App</h1>
            {userData && (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Log Out
              </button>
            )}
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path='/' element={userData ? <LogIn /> : <SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/api' element={<PrivateRoute element={FakeStoreAPI} />} />
            <Route path='/*' element={
              <div className="flex flex-col items-center justify-center h-[70vh]">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
                <p className="text-xl text-gray-600">Page not found</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
