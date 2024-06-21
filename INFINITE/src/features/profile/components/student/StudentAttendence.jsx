import React from 'react'
import StudentAttendanceChart from './StudentAttendenceChart'

const StudentAttendence = () => {
  return (
    <div className='bg-white w-full h-screen rounded-lg'>
    <div className='bg-white w-full h-1/6 flex rounded-lg'>
      <div className='bg-white w-1/2 border border-solid-black'>
        <h1 className='text-2xl'>Attendence Report</h1>
      </div>
      <div className='bg-white w-1/2'>
        <div className=''>
          <label for="choices">Choose an option:</label>
          <select id="choices" class="dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
          </select>
        </div>          
      </div>
    </div>
    <div className='flex gap-2'>
      <div className='bg-blue-100 w-1/2 rounded-lg'><StudentAttendanceChart/></div>
      <div className='bg-blue-100 w-1/2 rounded-lg'><StudentAttendanceChart/></div>   
   </div>
</div>
  )
}

export default StudentAttendence