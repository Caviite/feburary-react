import React, { useEffect, useState } from 'react'
import { userContext } from '.././context/userContext';
import { json } from 'zod';

function UserProvider({ children }) {

  const [name, setName] = useState('');
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = Boolean(token)

  const login = ({ user, token }) => {
    setToken(token || null)
    setUser(user || null)

    if (token) {
      localStorage.setItem('token', token)
    }

    if (user) {
      localStorage.setItem("user", json.stringify(user))
    }
  }

  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem("user")
    setUser(null)
    setToken(null)
  }

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    const savedToken = localStorage.getItem('token')

    try {
      if (savedUser) {
        const perSavedUser = JSON.parse(savedUser)
        setUser(perSavedUser)
      }
      if (savedToken) {
        setToken(savedToken)
      }
    } catch (error) {
      console.log(error);

    }

    setLoading(false)
  }, [])


  console.log(name, 'from context');

  const value = {
    setName,
    name,
    login,
    logOut,
    isAuthenticated,
    loading,
    user
  }

  return (
    <userContext.Provider value={value}> {children} </userContext.Provider>
  )
}

export default UserProvider
