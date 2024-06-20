import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, isAuth }) {
  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
