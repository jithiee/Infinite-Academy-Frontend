import React from 'react';
import schoolicon from '../../assets/images/schools-logo.jpg';
import { PiExamBold } from "react-icons/pi";
import {Link} from 'react-router-dom'


const Admin_Sidebar = ({ isSidebarOpen, sidebarRef }) => {
  return (
   <>
    <div className={`bg-white w-1/6 h-screen flex flex-col gap-4 fixed lg:relative z-10 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out  `}>
            <Link
             to='/'
            >
      <div ref={sidebarRef} className='bg-blue-200 h-12 flex justify-center items-center'>
            <img src={schoolicon} alt="schoolimg" className='w-full h-full' />
      </div>
            </Link> 

      <div
        className="bg-gradient-to-r from-blue-400 to-blue-600 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl cursor-pointer px-4 lg:px-6"
        
      >
       
        <span className="block lg:hidden text-white text-xl">
          <PiExamBold />
        </span>
        <span className="hidden lg:block text-white font-semibold">
          Profile
        </span>
      </div>

      <div
        className="bg-gradient-to-r from-blue-400 to-blue-600 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl cursor-pointer px-4 lg:px-6"
  
      >
        <span className="block lg:hidden text-white text-xl">
          <PiExamBold />
        </span>
        <span className="hidden lg:block text-white font-semibold">
          Dashboard
        </span>
      </div>

      <div
        className="bg-gradient-to-r from-blue-400 to-blue-600 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl cursor-pointer px-4 lg:px-6"
  
      >
        <span className="block lg:hidden text-white text-xl">
          <PiExamBold />
        </span>
        <span className="hidden lg:block text-white font-semibold">
          Mark
        </span>
      </div>




      <div
        className="bg-gradient-to-r from-blue-400 to-blue-600 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl cursor-pointer px-4 lg:px-6"
       
      >
        <span className="block lg:hidden text-white text-xl">
          <PiExamBold />
        </span>
        <span className="hidden lg:block text-white font-semibold">
          Attendance
        </span>
      </div>




      <div
        className="bg-gradient-to-r from-blue-400 to-blue-600 h-12 rounded-full flex justify-center items-center hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 transition-all duration-700 ease-in-out shadow-lg hover:shadow-xl cursor-pointer px-4 lg:px-6"
        
      >
        <span className="block lg:hidden text-white text-xl">
          <PiExamBold />
        </span>
        <span className="hidden lg:block text-white font-semibold">
          Leave Application
        </span>
      </div>


    </div>
   
   </>
  );
}

export default Admin_Sidebar;
