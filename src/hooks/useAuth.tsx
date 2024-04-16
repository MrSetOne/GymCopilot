import { useContext, useMemo } from 'react'
import { auth, googleProvider } from '../services/Firebase'
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { AuthContext } from '../context/UserContext/AuthState'
import { IAuthContext } from '../context/UserContext/AuthTypes'
import { parseFirebaseUser } from '../context/UserContext/AuthHolders'

const useAuth = () => {
  const { logIn, logOut: contextLogOut, user } = useContext(AuthContext) as IAuthContext

  const _doALogin = async (userCredential: UserCredential) => {
    const parsedUser = await parseFirebaseUser(userCredential)
    logIn(parsedUser)
  }

  const signUpWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(_doALogin)
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }

  const loginWithEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(_doALogin)
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(_doALogin)
      .catch((error) => {
        console.error(error)
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
  }

  const logOut = () => contextLogOut()

  const isLogged = useMemo(() => user.email && user.id && user.token, [user])

  return { loginWithGoogle, logOut, isLogged, signUpWithEmail, loginWithEmail }
}

export default useAuth
