import React from 'react'

const IsParent = () => {
  return (
    <div className='bg-red-200 w-full h-screen'>
                        <h1>if you are a parent</h1>

        <form className='bg-blue-100 text-center'>
          <label>firstname:</label>
          <input type="text" /><br /><br />
          <label>lastname:</label>
          <input type="text" /><br /><br />
          <label>Address:</label>
          <textarea name="" id=""></textarea><br /><br />
          <label>phone:</label>
          <input type="phone" /><br /><br />
          <label>occupation:</label>
          <input type="text" /><br /><br />
          <label>relationship:</label>
                <select>
                        <option value="" disabled selected>
                        Select 
                        </option>
                        <option value="Class 1">Father</option>
                        <option value="Class 2">Mother</option>
                        <option value="Class 3">Guardian</option>
                </select><br /><br />
           <div>
            <h4>select your students</h4>
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
                <label>select student:</label>
                <select>
                        <option value="" disabled selected>
                        Select 
                        </option>
                        <option value="Class 1">Ahkfjg</option>
                        <option value="Class 2">Bjdgfk</option>
                        <option value="Class 3">Chdfkhf</option>
                </select><br /><br />
               <p>student1</p>
               <p>student2</p>

           </div>

          <button className='bg-green-300 rounded-full'>Register</button>


        </form>
    </div>
  )
}

export default IsParent