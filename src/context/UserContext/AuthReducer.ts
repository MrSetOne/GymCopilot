import { IAction, IAuthData } from './AuthTypes'

type TAuthReducer = (state: IAuthData, action: IAction) => IAuthData

const authReducer: TAuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
      }

    case 'LOGOUT':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default authReducer
