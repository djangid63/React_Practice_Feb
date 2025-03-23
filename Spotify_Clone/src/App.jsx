import React from 'react'
import { SearchProvider } from '../src/Components/UseContext/SearchContext';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavigationPage from './Pages/NavigationPage'
import SignUp from './Components/Authentication/SignUp';
import LogIn from './Components/Authentication/LogIn';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Navigate } from 'react-router-dom';


const App = () => {
  // const selectStoredPassword = createSelector(
  //   (state) => state.auth,
  //   (auth) => auth.storedPassword
  // );
  // const storedPassword = useSelector(selectStoredPassword);
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          {/* <Route path='/' element={<SignUp />} /> */}
          {/* <Route path='/login' element={<LogIn />} /> */}
          {/* <Route path='/Homepage' element={storedPassword ? <NavigationPage /> : <Navigate to="/" />} /> */}
          <Route path='/' element={<NavigationPage />}></Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App