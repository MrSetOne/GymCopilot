import { IAuthData, TGetToken, TParseFirebaseUser } from './AuthTypes'
import { GoogleAuthProvider } from 'firebase/auth/cordova'

export enum ActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export const cleanUser: IAuthData = {
  name: null,
  email: null,
  id: null,
  picture: null,
  token: null,
}

export const parseFirebaseUser: TParseFirebaseUser = async (result, withGoogle = false) => {
  const token: string | null = await _getToken(result, withGoogle)

  const { uid: id, email, displayName: name, photoURL: picture } = result.user

  return { token, id, email, name, picture }
}

const _getToken: TGetToken = async (result, withGoogle = false) => {
  if (withGoogle) {
    const credential = GoogleAuthProvider.credentialFromResult(result)
    if (credential) return String(credential.accessToken)
    return null
  } else {
    return await result.user.getIdToken()
  }
}
