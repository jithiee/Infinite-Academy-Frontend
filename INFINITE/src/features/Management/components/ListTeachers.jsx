import React from 'react';

const ListTeachers = () => {
  return (
    <div className='bg-slate-200 flex flex-col lg:flex-row w-full min-h-screen p-5 gap-5'>
      <div className='w-full lg:w-1/2 bg-slate-500 p-5 rounded-lg'>
        <div>
          <h1 className='text-center text-white text-xl font-bold mb-4'>Teachers</h1>
        </div>
        <div className='overflow-x-auto'>
          <ul className='space-y-4 min-w-max'>
            <li className='flex md:justify-between text-white gap-2'>
              <span>Name</span>
              <span>Phone</span>
              <span>Subject</span>
              <button className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full lg:w-1/2 bg-slate-500 p-5 rounded-lg'>
        <div>
          <h1 className='text-center text-white text-xl font-bold mb-4'>Class Teachers</h1>
        </div>
        <div className='overflow-x-auto'>
          <ul className='space-y-4 min-w-max'>
            <li className='flex md:justify-between text-white gap-2'>
              <span>Name</span>
              <span>Phone</span>
              <span>Subject</span>
              <span>Class</span>
              <button className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListTeachers;
