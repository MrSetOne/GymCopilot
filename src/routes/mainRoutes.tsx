import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

export const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
