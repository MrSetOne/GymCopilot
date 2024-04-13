import React, { createContext, useReducer } from 'react'
import authReducer from './AuthReducer'
import { IAuthContext, IAuthData, TLogin } from './AuthTypes'
import { ActionType } from './AuthHolders'

const initialState: IAuthData = {
  name: null,
  email: null,
  id: null,
  picture: null,
  token: null,
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialState)

  const logIn: TLogin = (newUser) => dispatch({ type: ActionType.LOGIN, payload: newUser })

  const logOut = () => dispatch({ type: ActionType.LOGOUT, payload: null })

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
