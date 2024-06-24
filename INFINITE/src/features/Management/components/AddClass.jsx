import React from 'react';
import { useState } from 'react';

const AddClass = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [division, setDivision] = useState('');
    const [classTeacher, setClassTeacher] = useState('');
  
    const handleAddDivision = () => {
      setShowPopup(true);
    };
  
    const handleCancel = () => {
      setShowPopup(false);
      setDivision('');
      setClassTeacher('');
    };
  
    const handleSave = () => {
      // Here you can handle saving division and classTeacher data
      console.log("Division:", division);
      console.log("Class Teacher:", classTeacher);
  
      // Close the popup and reset values
      setShowPopup(false);
      setDivision('');
      setClassTeacher('');
    };
  return (
    <div className="bg-gradient-to-b from-violet-300 to-violet-500 w-full min-h-screen p-4">
      <div className="w-full h-1/6 bg-violet-400 flex justify-end items-center p-4 rounded-lg shadow-md">
        <div className="flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Class name"
            className="border border-gray-300 p-2 rounded-lg mr-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out w-full md:w-auto">
            Add Class
          </button>
        </div>
      </div>
      <div className="flex-grow bg-violet-100 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mt-4 rounded-lg">
        <div className="mb-4 p-4 border rounded-lg bg-white shadow-md">
          <h3 className="text-lg font-semibold text-center text-gray-700">Class 1</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out" onClick={handleAddDivision}>
            Add division
          </button>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-lg font-semibold mb-4">Add Division and Class Teacher</h2>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Division:</label>
                <input
                    type="text"
                    placeholder="Enter division..."
                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class Teacher:</label>
                  <select
                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                    value={classTeacher}
                    onChange={(e) => setClassTeacher(e.target.value)}
                  >
                    <option value="">Select class teacher...</option>
                    <option value="Teacher1">Teacher 1</option>
                    <option value="Teacher2">Teacher 2</option>
                    <option value="Teacher3">Teacher 3</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out mr-2"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

            {/* maping class division */}
            <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
                <div>Division:A</div>
                <div>Class-Teacher:Teacher1</div>
                <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
            </div>

        </div>


        <div className="mb-4 p-4 border rounded-lg bg-white shadow-md">
          <h3 className="text-lg font-semibold text-center text-gray-700">Class 2</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
            Add division
          </button>

           {/* maping class division */}
           <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
                <div>Division:A</div>
                <div>Class-Teacher:Teacher2</div>
                <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
            </div>
             {/* maping class division */}
             <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
                <div>Division:B</div>
                <div>Class-Teacher:Teacher3</div>
                <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
            </div>
             {/* maping class division */}
             <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
                <div>Division:C</div>
                <div>Class-Teacher:Teacher4</div>
                <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
            </div>
        </div>


        <div className="mb-4 p-4 border rounded-lg bg-white shadow-md">
          <h3 className="text-lg font-semibold text-center text-gray-700">Class 3</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
            Add division
          </button>


           {/* maping class division */}
           <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
                <div>Division:A</div>
                <div>Class-Teacher:Teacher5</div>
                <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
            </div>
        </div>


        <div className="mb-4 p-4 border rounded-lg bg-white shadow-md">
          <h3 className="text-lg font-semibold text-center text-gray-700">Class 4</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
            Add division
          </button>

           {/* maping class division */}
           <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
                <div>Division:A</div>
                <div>Class-Teacher:Teacher6</div>
                <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
            </div>
             {/* maping class division */}
             <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
                <div>Division:B</div>
                <div>Class-Teacher:Teacher10</div>
                <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
            </div>

        </div>


        <div className="mb-4 p-4 border rounded-lg bg-white shadow-md">
          <h3 className="text-lg font-semibold text-center text-gray-700">Class 6</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out" onClick={handleAddDivision}>
            Add division
          </button>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-lg font-semibold mb-4">Add Division and Class Teacher</h2>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Division:</label>
                <input
                    type="text"
                    placeholder="Enter division..."
                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class Teacher:</label>
                  <select
                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                    value={classTeacher}
                    onChange={(e) => setClassTeacher(e.target.value)}
                  >
                    <option value="">Select class teacher...</option>
                    <option value="Teacher1">Teacher 1</option>
                    <option value="Teacher2">Teacher 2</option>
                    <option value="Teacher3">Teacher 3</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out mr-2"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          
          <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
            <div>Division:A</div>
            <div>Class-Teacher:Teacher7</div>
            <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
          </div>
          <div className='bg-pink-200 w-full h-12 mt-4 pt-2  justify-evenly inline-flex'>
            <div>Division:B</div>
            <div>Class-Teacher:Teacher8</div>
            <button className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">edit</button>      
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AddClass;
