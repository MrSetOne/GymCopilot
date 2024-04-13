import { IAuthData } from './AuthTypes'

export const cleanUser: IAuthData = {
  name: null,
  email: null,
  id: null,
  picture: null,
  token: null,
}

export enum ActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}
