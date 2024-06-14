import React, { useState } from 'react'
import logoImage from '../../../assets/images/schools-logo.jpg';
import search_icon from '../../../assets/images/search-icon.png'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-white w-full h-12 flex items-center justify-between border-b border-solid border-b-slate-200 fixed'>
      <div className='w-1/3 flex items-center justify-center md:justify-center'>

        <img src={logoImage} alt="logo" className='w-44 h-10' />

      </div>
      <div className='hidden md:flex md:w-1/3 md:justify-evenly md:items-center'>
        <ul className='text-gray-700 font-semibold cursor-pointer'>Home</ul>
        <ul className='text-gray-700 font-semibold cursor-pointer'>About us</ul>
        <ul className='text-gray-700 font-semibold cursor-pointer'>Gallery</ul>
        <ul className='text-gray-700 font-semibold cursor-pointer'>Contact us</ul>
      </div>
      <div className='flex items-center w-1/3 justify-end md:justify-center'>
        <div className='bg-white border border-solid border-slate-300  rounded-full flex items-center h-8'>
          <input
            type='text'
            placeholder='Search...'
            className='w-44 h-6 p-2 border-0 rounded-l-full focus:outline-none'
          />
          <button className='w-10 h-10 rounded-full flex items-center justify-center'>
            <img src={search_icon} alt="search icon" className='w-8 h-8' />
          </button>
        </div>
        <button className='bg-green-200 rounded-full w-16 h-8 hidden md:flex items-center pl-2'>logout</button>
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
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>Home</ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>About us</ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>Gallery</ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>Contact us</ul>
          <ul className='block text-center p-4 border-b border-gray-300 cursor-pointer'>
            <button className='bg-green-400 rounded-full w-16 h-8'>logout</button>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
