import React from 'react';
import { NavLink } from 'react-router-dom';

const ManagementSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div 
      className={`bg-gray-700 h-screen  text-white w-48 md:relative md:block sticky top-0 md:z-0 ${isOpen ? 'block z-20' : 'hidden'}`} 
    >
      <div className="h-20 bg-gray-800 shadow-md p-4 flex items-center justify-center md:justify-start">
        <h1 className="text-2xl font-bold">Management</h1>
      </div>
      <nav className="mt-10 space-y-2">
        <ul className="list-none p-0">
          <li className="w-full">
            <NavLink 
              to="add-class" 
              className="block w-full px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded no-underline text-white text-center"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Add Class
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink 
              to="approve-leave" 
              className="block w-full mt-3 px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded no-underline text-white text-center"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Approve Leave
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink 
              to="add-gallery" 
              className="block w-full mt-3 px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded no-underline text-white text-center"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Add Gallery
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink 
              to="list-students" 
              className="block w-full mt-3 px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded no-underline text-white text-center"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              List Students
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink 
              to="list-teachers" 
              className="block w-full mt-3 px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded no-underline text-white text-center"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              List Teachers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ManagementSidebar;
