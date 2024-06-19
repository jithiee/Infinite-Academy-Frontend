// src/ContactPage.js
import React from 'react';

const Contact = () => {
  return (
    <div className="text-center">
      {/* Header Section */}
      <div className="relative text-center bg-cover bg-center py-20 text-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60" 
          style={{ backgroundImage: "url('https://th.bing.com/th/id/R.0036c929c51539f8cb9f4869c4b2cbf6?rik=leZGNCTUi0dF5g&riu=http%3a%2f%2fvsscienceschool.com%2fvsscienceschool.com%2fFile%2fvsss_image.jpg&ehk=xwmLqtvHl3e9YNGdGStMl98aCHU37yBpm8Ic59eN2G4%3d&risl=&pid=ImgRaw&r=0')" }}
        >   
        </div>
        <div className="relative">
          <h1 className="text-4xl font-bold">CONTACT US</h1>
          <p className="text-xl mt-4">Need an expert? You are more than welcomed to leave your contact info and we will be in touch shortly</p>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-around py-12 bg-gray-100">
        <div className="text-center max-w-xs m-4">
          <h2 className="text-2xl text-red-600 mb-4">VISIT US</h2>
          <p className="text-lg">2 Elizabeth St, London, UK</p>
        </div>
        <div className="text-center max-w-xs m-4">
          <h2 className="text-2xl text-red-600 mb-4">CALL US</h2>
          <p className="text-lg">+44 (0) 20 116 7711</p>
        </div>
        <div className="text-center max-w-xs m-4">
          <h2 className="text-2xl text-red-600 mb-4">CONTACT US</h2>
          <p className="text-lg">contact@poland.com</p>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="flex justify-center py-12">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509939!2d144.95373531531586!3d-37.81627977975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7b5c0f6c2d!2s2%20Elizabeth%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1597204970281!5m2!1sen!2sus"
         className='w-full h-screen'
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
