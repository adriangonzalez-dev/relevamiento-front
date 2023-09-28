import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.tsx'
import './index.css'
import { GlobalProvider } from './context/GlobalProvider.tsx'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={AppRouter} />
    </GlobalProvider>
  </React.StrictMode>,
)
