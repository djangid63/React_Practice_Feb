import React from 'react'
import { SearchProvider } from '../src/Components/UseContext/SearchContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import SignUp from './Components/Authentication/SignUp';
import LogIn from './Components/Authentication/LogIn';

const App = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/Homepage' element={userData ? <HomePage /> : alert("Please Log In to Play Music")} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App