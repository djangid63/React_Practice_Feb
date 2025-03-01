import React from 'react'
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage'
  import Api from './Components/Api'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
      <Routes>
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path='/apiPage' element={<Api />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App