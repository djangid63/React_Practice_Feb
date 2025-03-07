import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ element: Component }) => {
  const userData = localStorage.getItem('user') ? true : false;
  return userData ? <Component /> : <Navigate to='/signup' />
}

export default PrivateRoute
