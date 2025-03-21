import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage'
import Home from './Components/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/" element={<SignUpPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App