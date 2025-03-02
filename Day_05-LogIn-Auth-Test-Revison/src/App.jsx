import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  )
}

export default App
