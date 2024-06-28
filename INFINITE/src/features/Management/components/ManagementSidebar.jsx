import React from 'react';
import { NavLink } from 'react-router-dom';

const ManagementSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div 
      className={`bg-gray-800 text-white w-48 md:relative md:block fixed md:z-0 ${isOpen ? 'block z-20' : 'hidden'}`} 
      style={{ height: '100vh' }}
    >
      <div className="h-20 bg-gray-900 shadow-md p-4 flex items-center justify-center md:justify-start">
        <h1 className="text-2xl font-bold">Management</h1>
      </div>
      <nav className="mt-10 space-y-2">
        <ul>
          <li>
            <NavLink 
              to="add-class" 
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Add Class
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="approve-leave" 
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Approve Leave
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="add-gallery" 
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Add Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="list-students" 
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              List Students
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="list-teachers" 
              className="block px-4 py-2 hover:bg-gray-700 rounded"
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

