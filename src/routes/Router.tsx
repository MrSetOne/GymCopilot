import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { unloggedRoutes } from './unloggedRoutes'
import { mainRoutes } from './mainRoutes'

const Router = () => {
  const { isLogged } = useAuth()

  const router = useMemo(() => (isLogged ? mainRoutes : unloggedRoutes), [isLogged])

  return <RouterProvider router={router} />
}

export default Router
