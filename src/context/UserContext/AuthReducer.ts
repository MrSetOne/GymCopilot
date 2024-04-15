import { cleanUser } from './AuthHolders'
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
      return cleanUser
    default:
      return state
  }
}

export default authReducer
