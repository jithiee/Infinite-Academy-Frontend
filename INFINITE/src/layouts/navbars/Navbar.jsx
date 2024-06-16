import React, { useEffect, useRef, useState } from 'react';
import logoImage from '../../assets/images/schools-logo.jpg';
import search_icon from '../../assets/images/search-icon.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  return (
    <div className='bg-white w-full h-16 flex items-center justify-between border-b border-solid border-b-slate-200 sticky top-0 z-10 '>
      <div className='w-80 flex items-center justify-center md:justify-center'>
        <img src={logoImage} alt="logo" className='w-44 h-10' />
      </div>
      <div className='hidden md:flex md:w-1/2 md:justify-evenly md:items-center'>
        <ul className='flex space-x-8'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `cursor-pointer  font-semibold no-underline ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `cursor-pointer font-semibold no-underline ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/gallery'
              className={({ isActive }) =>
                `cursor-pointer font-semibold no-underline ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/posts'
              className={({ isActive }) =>
                `cursor-pointer font-semibold no-underline ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/news'
              className={({ isActive }) =>
                `cursor-pointer font-semibold no-underline ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='flex items-center w-1/3 justify-end md:justify-center'>
        <div className='hidden md:flex bg-white border border-solid border-slate-300 rounded-full items-center h-8 w-44'>
          <input
            type='text'
            placeholder='Search...'
            className='w-32 h-6 p-2 border-0 rounded-l-full focus:outline-none'
          />
          <button className='w-8 h-8 rounded-full flex items-center justify-center'>
            <img src={search_icon} alt="search icon" className='w-8 h-8' />
          </button>
        </div>
        <div className='md:hidden relative'>
          <button
            className='w-8 h-8 rounded-full flex items-center justify-center'
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <img src={search_icon} alt="search icon" className='w-8 h-8' />
          </button>
          {isSearchOpen && (
            <div ref={searchRef} className='absolute top-10 right-0 bg-white border border-solid border-slate-300 shadow-lg rounded-full flex items-center p-2'>
              <input
                type='text'
                placeholder='Search...'
                className='w-32 p-2 border-0 rounded-l-full focus:outline-none'
              />
              <button className='w-8 h-8 rounded-full flex items-center justify-center'>
                <img src={search_icon} alt="search icon" className='w-8 h-8' />
              </button>
            </div>
          )}
        </div>
        <Link
          to='login'
          className='bg-black text-white ml-4 pl-10 pr-10 py-2 hidden md:flex items-center rounded-full no-underline'
        >
          Login
        </Link>
        <button
          className='w-16 h-8 ml-2 md:hidden flex items-center justify-center'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='absolute top-12 right-0 bg-gray-200 w-full md:hidden'>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>
            Home
          </ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>
            About us
          </ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>
            Gallery
          </ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>
            Post
          </ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>
            News
          </ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>
            <button className=''>Login</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
