import React from 'react';
import { NavLink } from 'react-router-dom';

const TeacherNavbar = ({ isClassTeacher }) => {
  return (
    <nav className="mb-6">
      <ul className="flex justify-center space-x-4">
        <li>
          <NavLink
            to="/teacherprofile/postform"
            activeClassName="bg-blue-500 text-white"
            className="p-2 rounded-md bg-gray-200 text-gray-800"
          >
            Upload Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="addmarks"
            activeClassName="bg-blue-500 text-white"
            className="p-2 rounded-md bg-gray-200 text-gray-800"
          >
            Add Marks
          </NavLink>
        </li>
        {isClassTeacher && (
          <>
            <li>
              <NavLink
                to="approveleave"
                activeClassName="bg-blue-500 text-white"
                className="p-2 rounded-md bg-gray-200 text-gray-800"
              >
                Approve Leave
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teacherprofile/markattendance"
                activeClassName="bg-blue-500 text-white"
                className="p-2 rounded-md bg-gray-200 text-gray-800"
              >
                Mark Attendance
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default TeacherNavbar;
