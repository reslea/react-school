import React from 'react'
import { useSelector } from 'react-redux';

export default function ProtectedComponent({ 
  requiresRole, 
  children, 
  noAcceessElement }) {
  const userRole = useSelector(store => store.auth.userInfo?.role);
  const hasAccess = requiresRole === userRole;

  return hasAccess
    ? <>{children}</>
    : noAcceessElement ? <>{noAcceessElement}</> : <></>
}
