import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import AddTopic from './pages/AddTopic'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/add/topics',
    element: <AddTopic/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
