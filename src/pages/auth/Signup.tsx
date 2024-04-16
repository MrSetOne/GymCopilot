import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const Signup = () => {
  const { signUpWithEmail } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    signUpWithEmail(email, password)
  }

  return (
    <div>
      <h1>Login</h1>
      <form action='post' onSubmit={handleSubmit}>
        <input type='email' name='email' id='email' />
        <input type='password' name='password' id='password' />
        <input type='submit' value='Signup' />
      </form>
      <Link to={'/'}>Login</Link>
    </div>
  )
}

export default Signup
