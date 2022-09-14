import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function ProtectedRoute({ requiresRole, element }) {
  const userRole = useSelector(store => store.auth.userInfo?.role);
  const hasAccess = requiresRole === userRole;

  if (!hasAccess) console.log('access denied');
  
  return hasAccess
  ? (<>{element}</>)
  : (
    <div>
      <h3>Sorry, you dont have required access</h3>
      <Link to='/login' className='btn btn-primary'>Login</Link>
    </div>
  )
}
