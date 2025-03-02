import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'

const App = () => {
  return (
    <BrowserRouter>
      <SignUp />
      <LogIn />
    </BrowserRouter>
  )
}

export default App
