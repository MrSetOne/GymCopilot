import { useContext, useMemo } from 'react'
import { auth, googleProvider } from '../services/Firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AuthContext } from '../context/UserContext/AuthState'
import { IAuthContext } from '../context/UserContext/AuthTypes'

const useAuth = () => {
  const { logIn, logOut: contextLogOut, user } = useContext(AuthContext) as IAuthContext

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)

        if (!credential) return

        const token = credential.accessToken as string
        const { uid: id, email, displayName: name, photoURL: picture } = result.user

        logIn({
          token,
          id,
          email,
          name,
          picture,
        })

        // If you need more info you can call the function getAdditionalUserInfo(result)
      })
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

  const isLogged = useMemo(
    () => user.email && user.id && user.name && user.picture && user.token,
    [user],
  )

  return { loginWithGoogle, logOut, isLogged }
}

export default useAuth
