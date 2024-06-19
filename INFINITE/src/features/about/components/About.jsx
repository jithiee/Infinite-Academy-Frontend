import React from 'react';
import teacher from '../assets/images/teacher.png';

const About = () => {
  return (
    <>
      <div className="flex justify-center py-10 bg-gradient-to-r from-blue-200 ">
        <div className="h-auto md:h-[35rem] w-[88%] bg-white shadow-lg rounded-lg overflow-hidden m-3 flex flex-col md:flex-row justify-center gap-8 md:gap-32 flex-wrap">
          <div className="w-full md:w-[32%] h-auto md:h-72 mt-10 md:mt-40 ml-4 md:ml-24 p-6 flex flex-col justify-center items-center text-center rounded-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold  text-gray-900 mb-4 p-3    whitespace-nowrap">Welcome to Our School</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed ">
              Our school is dedicated to providing a nurturing and stimulating environment for students to learn and grow. We offer a comprehensive curriculum that encourages academic excellence and personal development.
            </p>
          </div>
          
          <div className="w-full md:w-[50%] h-72 md:h-full relative">
            <img className="absolute top-0 left-0 w-full h-full object-cover rounded-r-lg "  src={teacher} alt="teacher" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
