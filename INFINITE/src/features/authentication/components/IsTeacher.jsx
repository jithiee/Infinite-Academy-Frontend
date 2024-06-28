import React from 'react'

const IsTeacher = () => {
  return (
    <div className='bg-red-200 w-full h-screen'>
        <h1>if you are a teacher</h1>
        <form className='bg-blue-100 text-center'>
          <label>firstname:</label>
          <input type="text" /><br /><br />
          <label>lastname:</label>
          <input type="text" /><br /><br />
          <label>Gender:</label>
                <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-2 "
                    />
                    Male
                </label>
                <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-2 "
                    />
                    Female
                  </label><br /> <br />
          <label>Address:</label>
          <textarea name="" id=""></textarea><br /><br />
          <label>phone:</label>
          <input type="phone" /><br /><br />
          <label>Subject:</label>
          <input type="text" /><br /><br />
          

          <button className='bg-green-300 rounded-full'>Register</button>


        </form>
    </div>
  )
}

export default IsTeacher