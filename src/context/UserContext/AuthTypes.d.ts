import { ActionType } from './AuthHolders'

export type TLogin = (newUser: IAuthData) => void

export interface IAuthData {
  name: string | null
  email: string | null
  id: string | null
  picture: string | null
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
