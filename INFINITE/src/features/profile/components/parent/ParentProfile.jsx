import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const ParentProfile = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-6 flex items-center justify-center">
    <div className="bg-white shadow-xl rounded-lg w-full max-w-md">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full border-2 border-gray-300"
            src="https://via.placeholder.com/150"
            alt="Parent Profile"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Parent</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-800 text-lg font-semibold">Contact Information</h3>
          <ul className="mt-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-24 font-semibold">Email:</span>
              <span>johndoe@example.com</span>
            </li>
            <li className="flex items-center mt-2">
              <span className="w-24 font-semibold">Phone:</span>
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center mt-2">
              <span className="w-24 font-semibold">Address:</span>
              <span>123 Main St, Anytown, USA</span>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-800 text-lg font-semibold">Children</h3>
          <ul className="mt-2 text-gray-600">
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-24 font-semibold">Child 1:</span>
                <span>Jane Doe</span>
              </div>
              <NavLink
              to='/studentprofile'
              className="rounded-full bg-blue-500 text-white px-3 py-1 text-sm cursor-pointer font-semibold no-underline"
            >
              View Academic Details
            </NavLink>
            </li>
            <li className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <span className="w-24 font-semibold">Child 2:</span>
                <span>John Doe Jr.</span>
              </div>
              <NavLink
              to='/studentprofile'
              className="rounded-full bg-blue-500 text-white px-3 py-1 text-sm cursor-pointer font-semibold no-underline"
            >
              View Academic Details
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ParentProfile