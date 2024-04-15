import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = () => {
  const { loginWithGoogle, loginWithEmail } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    loginWithEmail(email, password)
  }

  return (
    <div>
      <h1>Login</h1>
      <form action='post' onSubmit={handleSubmit}>
        <input type='email' name='email' id='email' />
        <input type='password' name='password' id='password' />
        <input type='submit' value='Login' />
      </form>
      <button onClick={loginWithGoogle}>Login with Google</button>
      <Link to={'/signup'}>Signup</Link>
    </div>
  )
}

export default Login
