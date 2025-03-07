import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NavFooter from './layoutmainpages/NavFooter.jsx';
import HomePage from './pages/HomePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './features/about/components/About.jsx';
import Gallery from './features/gallery/components/Gallery.jsx';
import Post from './features/posts/components/Post.jsx';
import PostForm from './features/posts/components/PostForm.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import StudentProfilePage from './pages/StudentProfilePage.jsx';
import Contact from './features/Contact/components/contact.jsx';

import ParentProfile from './features/profile/components/parent/ParentProfile.jsx'
import TeacherProfile from './features/profile/components/teacher/TeacherProfile.jsx'
import AddMark from './features/profile/components/teacher/AddMark.jsx'
import MarkAttendence from './features/profile/components/teacher/MarkAttendence.jsx'
import ApproveLeave from './features/profile/components/teacher/ApproveLeave.jsx'
import IsTeacher from './features/authentication/components/IsTeacher.jsx'
import IsStudent from './features/authentication/components/IsStudent.jsx'
import IsParent from './features/authentication/components/IsParent.jsx'
import ManagementPage from './pages/ManagementPage.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegistrationPage />} />
      <Route path="teacher" element={<IsTeacher />} />
      <Route path="student" element={<IsStudent />} />
      <Route path="parent" element={<IsParent />} />

      <Route path='/' element={<NavFooter />}>
        <Route path='' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='posts' element={<Post />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='postform' element={<PostForm />} />
      <Route path='studentprofile' element={<StudentProfilePage />} />
      <Route path='parentprofile' element={<ParentProfile />} />
      
      <Route path='/teacherprofile' element={<TeacherProfile isClassTeacher={true} />}>
        <Route path='uploadpost' element={<PostForm />} />
        <Route path='addmarks' element={<AddMark />} />
        <Route path='markattendance' element={<MarkAttendence />} />
        <Route path='approveleave' element={<ApproveLeave />} />
      </Route>

      <Route path='management' element={<ManagementPage />} />






    </Route>


  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
