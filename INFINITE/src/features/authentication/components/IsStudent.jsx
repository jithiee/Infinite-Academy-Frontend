import React from 'react'

const IsStudent = () => {
  return (
    <div className='bg-red-200 w-full h-screen'>
                <h1>if you are a student</h1>
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
          <label>Roll no:</label>
          <input type="number" /><br /><br />
          <label>date of birth:</label>
          <input type="date" /><br /><br />
          <label>select class:</label>
                <select>
                        <option value="" disabled selected>
                        Select 
                        </option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                </select><br /><br />
            <label>select division:</label>
                <select>
                        <option value="" disabled selected>
                        Select 
                        </option>
                        <option value="Class 1">A</option>
                        <option value="Class 2">B</option>
                        <option value="Class 3">C</option>
                </select><br /><br />

          <label>joining date:</label>
          <input type="date" /><br /><br />


  <button className='bg-green-300 rounded-full'>Register</button>
        </form>
    </div>
  )
}

export default IsStudent