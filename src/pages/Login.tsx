// import { useContext } from 'react'
import useAuth from '../hooks/useAuth'
// import { AuthContext } from '../context/AuthContext/UserState'
// import { IAuthContext } from '../context/AuthContext/UserHolders'

const Login = () => {
  const { loginWithGoogle } = useAuth()

  // const { user } = useContext(AuthContext) as IAuthContext;

  return (
    <div>
      <button onClick={loginWithGoogle}>
        <h1>patatatata</h1>
      </button>
    </div>
  )
}

export default Login
