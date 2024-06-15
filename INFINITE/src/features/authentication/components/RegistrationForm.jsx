import React from 'react';

const RegistrationForm = () => {
  return (
 <>
 <div className="flex justify-center items-center h-screen ">
      
  
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl z-0">
        <form className="w-full max-w-lg bg-[#34D399] rounded shadow-md p-8 md:mr-6">
          <h2 className="text-2xl text-white font-bold mb-8">Register</h2>
          <div className="mb-4">
            <input
              type="text"
              className="w-full h-10 rounded p-3"
              placeholder="Full name"
            />
          </div>
         <div className="mb-4">
            <input
              type="email"
              className="w-full h-10 rounded p-3"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full h-10 rounded p-3"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full h-10 rounded p-3"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="w-full h-10 rounded p-3"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              list="lastnames" 
              placeholder="Choose who you are " 
              className="w-full h-10 rounded p-3"
            />
            <datalist id="lastnames">
              <option value="Student" />
              <option value="Teacher" />
              <option value="Parent" />
            </datalist>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 p-2 rounded-full text-white"
          >
            Register
          </button>
        </form>
        <div className="hidden md:block">
          
          <img
            src="https://images.unsplash.com/photo-1658235081562-a7f50e7e05b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" md:w-96  rounded shadow-md"
          />
        </div>
      </div>
    </div>

    <div className='mt-[-20%]'>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,138.7C672,96,768,64,864,80C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
 
 
 </>
  );
}

export default RegistrationForm;
