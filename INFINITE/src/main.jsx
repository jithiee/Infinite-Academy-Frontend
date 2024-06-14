import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NavFooter from './layoutmainpages/NavFooter.jsx'
import HomePage from './pages/HomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './features/about/components/About.jsx'
import Gallery from './features/gallery/components/Gallery.jsx'
import Post from './features/posts/components/Post.jsx'
import PostForm from './features/posts/components/PostForm.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
      
      <Route path='login' element={<LoginPage/>} />   
      <Route path='register' element={<RegistrationPage/>} />   


    <Route path='/' element={<NavFooter/>}  >  
        <Route path='' element={<HomePage/>}  />
        <Route path='about' element={<About/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='posts' element={<Post/>} />
       
    </Route>

    <Route path='postform' element={<PostForm/>} />

   </Route>
    

  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
