import React from 'react'
import useAuth from '../hooks/useAuth'

const Login = () => {
  const { loginWithGoogle } = useAuth()

  return (
    <div>
      <button onClick={loginWithGoogle}>
        <h1>patatatata</h1>
      </button>
    </div>
  )
}

export default Login
