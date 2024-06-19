import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 p-6 sm:p-12">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-12 bg-cover bg-center bg-no-repeat h-64 sm:h-96 relative"
          style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/group-happy-indian-school-students-smiling-camera-white-background_979520-48526.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white">Infinite Horizons Academy</h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-200">
              Empowering Students to Achieve Infinite Possibilities
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Infinit Academy, our mission is to provide a nurturing and challenging environment where students can grow
              academically, socially, and emotionally. We strive to inspire a lifelong love of learning and a commitment to
              academic excellence.
            </p>
          </div>
          <div>
            <img src="https://cdn.eduadvisor.my/articles/2022/04/how-to-be-teacher-malaysia-feature.png" alt="Infinit Academy Campus" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://compote.slate.com/images/e9ee613f-768d-4b97-86bd-a2521fa2401c.jpg?width=1200" alt="Students at Infinit Academy" className="rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Infinit Academy envisions a community where students are empowered to explore their interests and talents, foster
              creativity, and achieve their highest potential. We aim to cultivate responsible global citizens who are equipped to
              tackle the challenges of the future.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Discover how Infinit Academy can help your child reach their full potential. Contact us today to learn more about our
            programs, admissions process, and the unique opportunities we offer.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
