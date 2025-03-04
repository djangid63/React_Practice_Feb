import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Api from './Components/Api'
import FakeStoreAPI from './Components/FakeStoreAPI'

const App = () => {

  const UserData = localStorage.getItem('user') ? true : false;
  // console.log(UserData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/api' element={UserData ? <FakeStoreAPI /> : <SignUp />} />
        <Route path='/*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
