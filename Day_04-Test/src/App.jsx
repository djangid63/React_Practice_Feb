import React from 'react'
import SignIn from './Components/SignIn'
import LogIn from './Components/LogIn'
import Api from './Components/Api'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignIn />} />
        <Route path='/api' element={<Api />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
