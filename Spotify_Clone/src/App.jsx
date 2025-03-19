import React from 'react'
import HomePage from './Pages/HomePage'
import { SearchProvider } from '../src/Components/UseContext/SearchContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Authentication/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <SignUp />
      <SearchProvider>
        <Routes>
          <Route path='/Homepage' element={<HomePage />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App