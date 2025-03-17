import React from 'react'
import HomePage from './Pages/HomePage'
import { SearchProvider } from '../src/Components/UseContext/SearchContext';

const App = () => {
  return (
    <SearchProvider>
      <div className='overflow-x-hidden'>
        <HomePage />
      </div>
    </SearchProvider>
  )
}

export default App