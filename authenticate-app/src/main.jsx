import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './views/login.jsx'
import Signup from './views/signup.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
