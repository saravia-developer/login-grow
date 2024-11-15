import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();

  if(!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }}/>
  }
  
  return children;
}

export default ProtectedRoutes