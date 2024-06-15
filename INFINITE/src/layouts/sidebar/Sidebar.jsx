import React, { useState } from 'react';
import schoolicon from '../../assets/images/schools-logo.jpg';
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { PiExamBold } from "react-icons/pi";
const Sidebar = ({ isSidebarOpen, sidebarRef,setActiveComponent }) => {
  return (
    <div className={`bg-white w-1/6 h-screen flex flex-col gap-4 fixed lg:relative z-10 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div ref={sidebarRef} className='bg-blue-200 h-12 flex justify-center items-center'>
        <img src={schoolicon} alt="schoolimg" className='w-full h-full' />
      </div>
      <div className='bg-blue-200 h-12 rounded-full flex justify-center items-center hover:bg-red-300' onClick={() => setActiveComponent('profile')}>
        <span className='block lg:hidden'><CgProfile /></span>
        <span className="hidden lg:block">Profile</span>
      </div>
      <div className='bg-blue-200 h-12 rounded-full flex justify-center items-center hover:bg-red-300' onClick={() => setActiveComponent('dashboard')}>
        <span className='block lg:hidden'><MdDashboard /></span>
        <span className="hidden lg:block">Dashboard</span>
      </div>
      <div className='bg-blue-200 h-12 rounded-full flex justify-center items-center hover:bg-red-300' onClick={() => setActiveComponent('attendence')}>
        <span className='block lg:hidden'><FaCalendarAlt /></span>
        <span className="hidden lg:block">Attendance</span>
      </div>
      <div className='bg-blue-200 h-12 rounded-full flex justify-center items-center hover:bg-red-300' onClick={() => setActiveComponent('mark')}>
        <span className='block lg:hidden'><PiExamBold /></span>
        <span className="hidden lg:block">Mark</span>
      </div>
    </div>
  );
};

export default Sidebar;
