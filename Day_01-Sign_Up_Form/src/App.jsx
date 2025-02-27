import React from 'react'
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage'
import Api from './Components/Api'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Api></Api>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App