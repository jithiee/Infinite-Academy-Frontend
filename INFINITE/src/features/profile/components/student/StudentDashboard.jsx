import React from 'react'

const studentdashboard = () => {
  return (
    <div className='bg-blue-200 w-full h-screen flex justify-center items-center'>
    <div className='bg-blue-200 w-full h-screen p-4 lg:p-8'>
        <div className='bg-blue-200 w-full h-1/2 flex flex-col sm:flex-row gap-4 lg:gap-6'>
            <div className='bg-white w-full sm:w-1/2 h-full rounded-lg'>
                <h1 className='text-center font-bold text-2xl'>Attendance</h1>
                <div className='flex'>
                    <div className='w-1/2 flex justify-center items-center flex-col gap-2'>
                        <div className='flex w-28'>
                            <div className='w-6 h-6 bg-green-500'></div>&nbsp;
                            <p>present</p>
                        </div>
                        <div className='flex w-28'>
                            <div className='w-6 h-6 bg-orange-300'></div>&nbsp;
                            <p>Late</p>
                        </div>
                        <div className='flex w-28'>
                            <div className='w-6 h-6 bg-orange-500'></div>&nbsp;
                            <p>Excused</p>
                        </div>
                        <div className='flex w-28'>
                            <div className='w-6 h-6 bg-red-600'></div>&nbsp;
                            <p>Unexcused</p>
                        </div>
                    </div>
                    <div className='w-1/2 mt-4'>
                        <div className='w-44 h-44 bg-green-500 rounded-full flex justify-center items-center'>
                            <div className='w-24 h-24 bg-white rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-fuchsia-300 w-full sm:w-1/2 h-full rounded-lg'>
                <h1 className='text-center font-bold text-2xl'>Statistics</h1>
            </div>
        </div>
        <div className='bg-blue-200 w-full h-1/2 flex flex-col sm:flex-row gap-4 lg:gap-6 mt-4 lg:mt-6'>
            <div className='bg-white w-full sm:w-1/2 h-full rounded-lg'>
                <h1 className='text-center font-bold text-2xl'>Marks</h1>
            </div>
            <div className='bg-white w-full sm:w-1/2 h-full rounded-lg'>
                <h1 className='text-center font-bold text-2xl'>Fees Record</h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default studentdashboard