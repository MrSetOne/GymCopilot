import { UserCredential } from 'firebase/auth'
import { ActionType } from './AuthHolders'

export type TLogin = (newUser: IAuthData) => void

export type TParseFirebaseUser = (
  result: UserCredential,
  withGoogle?: boolean,
) => Promise<IAuthData>

export type TGetToken = (
  result: UserCredential,
  withGoogle: boolean = false,
) => Promise<string | null>

export interface IAuthData {
  name?: string | null
  email: string | null
  id: string | null
  picture?: string | null
  token: string | null
}

export interface IAuthContext {
  user: IAuthData
  logIn: TLogin
  logOut: () => void
}

export interface IAction {
  type: ActionType
  payload: IAuthData | null
}
