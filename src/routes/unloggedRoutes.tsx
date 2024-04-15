import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'

export const unloggedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
])
