import React from 'react'
import HomePage from './Pages/HomePage'
import { SearchProvider } from '../src/Components/UseContext/SearchContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Authentication/SignUp';
import LogIn from './Components/Authentication/LogIn';

const App = () => {
  return (
    <BrowserRouter>
      <SignUp />
      <SearchProvider>
        <Routes>
          <Route path='/Homepage' element={<HomePage />} />
          <Route path='/login' element={<LogIn />}/>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App