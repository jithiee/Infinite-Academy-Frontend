import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ManagementSidebar from '../features/Management/components/ManagementSidebar';

const ManagementPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      <div className="bg-gray-800 text-white w-full p-4 md:hidden flex justify-between items-center">
        <button 
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <ManagementSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-grow ">
        <Outlet />
      </div>
    </div>
  );
};

export default ManagementPage;
