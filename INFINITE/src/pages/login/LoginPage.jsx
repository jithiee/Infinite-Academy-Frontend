import React from 'react'
// import './pages/login/LoginPage.css'



const Login = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-[#0099ff] h-auto w-full lg:w-3/5 lg:h-96 flex flex-col-reverse lg:flex-row mx-auto mt-10 lg:mt-28 rounded-lg shadow-lg">      
        <div className="w-full lg:w-1/2 bg-[#34D399] rounded-lg lg:rounded-br-100xl p-6 lg:p-10 mt-10 lg:mt-0">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl text-white text-center lg:text-left mb-4">New here?</h2>
            <p className="text-white text-center lg:text-left mb-6">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world</p>
            <button className="rounded-full w-64 lg:w-32 h-10 border border-2 border-white text-white mt-4 animate-border">SIGN UP</button>
          </div>
          <div className="flex justify-center mt-10 lg:mt-14">
            {/* <img src="https://iqwing.s3.ap-south-1.amazonaws.com/ssibhota/results/2023-04/1680350152649.jpg" className="rounded-br-100xl w-full lg:w-96" alt="" /> */}
          </div>
   
        </div>
        <div className="bg-[#0099ff] flex items-center justify-center w-full lg:w-1/2 p-6 lg:p-10">
          <div className="w-full max-w-md">
            <h1 className="text-center text-2xl font-medium mb-6">Sign in</h1>
            <input type="text" placeholder="Username" className="block w-full pl-6 h-10 border border-solid border-black rounded-full bg-pink-100 mb-4" />
            <input type="password" placeholder="Password" className="block w-full pl-6 h-10 border border-solid border-black rounded-full bg-pink-100 mb-4" />
            <button className="bg-[#34D399] rounded-full w-full lg:w-32 h-10 mx-auto block mb-4 border border-2 animate-border">LOGIN</button>
            <p className="text-center font-sm mb-4">Or Sign in with social platforms</p>
            <div className="flex justify-center space-x-4">
              <button className="w-8 h-8 rounded-full border border-solid border-black flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/81/81341.png" alt="facebook" className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-solid border-black flex items-center justify-center">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png" alt="twitter" className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-solid border-black flex items-center justify-center">
                <img src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/logo-google.png" alt="google" className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-solid border-black flex items-center justify-center">
                <img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="linkedin" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Login 