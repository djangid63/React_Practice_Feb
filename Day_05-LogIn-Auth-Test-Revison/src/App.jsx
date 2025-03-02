import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Api from './Components/Api'

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/api' element={<Api />} />
        <Route path='/*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
