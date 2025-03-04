import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Api from './Components/Api'
import FakeStoreAPI from './Components/FakeStoreAPI'

const App = () => {

  const userData = localStorage.getItem('user') ? true : false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/api' element={userData ? <FakeStoreAPI /> : <SignUp />} />
        <Route path='/*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
