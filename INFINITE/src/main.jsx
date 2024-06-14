import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NavFooter from './layoutmainpages/NavFooter.jsx'
import HomePage from './pages/HomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './features/about/components/About.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<NavFooter/>}  >  
        <Route path='' element={<HomePage/>}  />
        <Route path='about' element={<About/>} />

    </Route>
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
