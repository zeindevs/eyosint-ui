import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './globals.css'

import { ThemeProvider } from './components/theme-provider'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>,
)
