import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './Component/LoginPage'
import SignUpPage from './Component/SignUpPage'
import Content from './Component/Content'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/" element={<SignUpPage />} />
        <Route path="/Content" element={<Content />} />
      </Routes>
    </Router>
  )
}

export default App