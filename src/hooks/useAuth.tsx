import { auth, googleProvider } from '../services/Firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const useAuth = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)

        if (!credential) return

        // const token = credential.accessToken
        // const user = result.user
        // const userData = getAdditionalUserInfo(result)
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
  return { loginWithGoogle }
}

export default useAuth
