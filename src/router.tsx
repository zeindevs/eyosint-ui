import { createBrowserRouter } from 'react-router-dom'

import ForgetPassword from './pages/auth/forget-password'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Home from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Signup />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
])
