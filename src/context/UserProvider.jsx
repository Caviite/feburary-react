import React, { useState } from 'react'
import { UserContext } from '.././context/userContext';

function UserProvider({ children }) {

  const [name, setName] = useState('');
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const isAuthenticated = Boolean(token)

  const login = ({ user, token }) => {
    setToken(token || null)
    setUser(user || null)

    if (token) {
      localStorage.setItem('token', token)
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    }
  }

  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem("user")
    setUser(null)
    setToken(null)
  }

  console.log(name, 'from context');

  const value = {
    setName,
    name,
    login,
    logOut,
    isAuthenticated,
    user
  }

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  )
}

export default UserProvider
