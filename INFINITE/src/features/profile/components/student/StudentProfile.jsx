import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../../../../layouts/sidebar/Sidebar"
import StudentDashboard from '../student/StudentDashboard';
import StudentMark from '../student/StudentMark';
import StudentAttendence from '../student/StudentAttendence'
import LeaveLetterForm from './LeaveLetterForm';

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('profile');
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className='bg-white w-full h-screen flex'>
      <Sidebar isSidebarOpen={isSidebarOpen} sidebarRef={sidebarRef} setActiveComponent={setActiveComponent} className='fixed'/> 
      <div className='bg-white w-full lg:w-5/6 h-screen border border-solid border-blue-200'>
        <div className='bg-blue-100 w-full h-1/6 flex justify-center items-center'>
          <div className='bg-blue-300 flex justify-between items-center w-3/4 h-16 rounded-lg'>
            <div className='flex items-center'>
              <button onClick={toggleSidebar} className="text-2xl lg:hidden mr-4">
                <AiOutlineMenu />
              </button>
              <div className='pl-4 ' >
                Hi, Student Name <br /> Welcome to School Name
              </div>
            </div>
            <div className='bg-gray-500 w-12 h-12 rounded-full flex items-center justify-center mt-2 mr-2'>img-logout</div>
          </div>
        </div>
        {activeComponent === 'profile' && (
        <div className='bg-white w-full flex flex-col lg:flex-row h-5/6'>
          <div className='bg-blue-100 w-full lg:w-1/4 h-auto lg:h-full'>
            <div className='bg-black w-full h-20 lg:h-1/6 flex'>
              <div className='bg-white w-20 h-20 rounded-full m-1 text-center'>image</div>
              <div className='text-white h-20'>
                <p>student name<br/>class<br/>roll no</p>
                
              </div>
            </div>
            <div className='bg-white border border-solid border-blue-200 w-full h-72 flex-grow'>
              <h3 className='ml-4 pt-4'>Contact Information:</h3>
              <p className='ml-8'>email:</p>
              <p className='ml-8'>phone:</p>
              <p className='ml-8'>address</p>
            </div>
          </div>
          <div className='bg-white w-full lg:w-3/4 h-auto lg:h-full flex flex-col'>
            <div className='bg-white w-full flex flex-col lg:flex-row h-auto lg:h-1/2'>
              <div className='bg-blue-100 w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center border'>
                <div className='bg-white w-80 h-56 rounded-lg'>
                  <h2 className='text-center'>Academic Info</h2>
                  <p className='ml-8'>Class:</p>
                  <p className='ml-8'>Division:</p>
                  <p className='ml-8'>Roll no:</p>
                  <p className='ml-8'>Class Teacher:</p>
                </div>
              </div>
              <div className='bg-blue-100 w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center'>
                <div className='bg-white w-80 h-56 rounded-lg'>
                  <h2 className='text-center'>Personal Info</h2>
                  <p className='ml-8'>Phone:</p>
                  <h6 className='ml-8'>Guardian:</h6>
                  <p className='ml-8'>Name:</p>
                  <p className='ml-8'>Relationship:</p>
                  <p className='ml-8'>Phone:</p>
                </div>
              </div>
            </div>
            <div className='bg-white w-full h-32 lg:h-1/2'>another details</div>
          </div>
        </div>
           )}
           {activeComponent === 'dashboard' && <StudentDashboard/>}
           {activeComponent === 'mark' && <StudentMark/>}
           {activeComponent === 'attendence' && <StudentAttendence/>}
           {activeComponent === 'leaveform' && <LeaveLetterForm/>}

      </div>
    </div>
  );
};

export default Profile;
