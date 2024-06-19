import React from 'react'

const StudentAttendence = () => {
  return (
    <div className='bg-blue-500 w-full h-screen rounded-lg'>
    <div className='bg-pink-200 w-full h-1/6 flex rounded-lg'>
      <div className='bg-red-500 w-1/2'>
        <h1 className='text-2xl'>Attendence Report</h1>
      </div>
      <div className='bg-green-600 w-1/2'>
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
    <div></div>
</div>
  )
}

export default StudentAttendence