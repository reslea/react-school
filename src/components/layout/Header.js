import React from 'react'
import { useContext } from 'react'
import { TokenContext } from '../../App'
// import { useSelector } from 'react-redux'

export default function Header() {
  // const userInfo = useSelector(store => store.auth.userInfo);

  const { token } = useContext(TokenContext);

  return (    
    <header className="app-header">
        <div>Hello, {token}</div>
    </header>
  )
}
