import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-svg bg-gradient-to-t from-black via-slate-500 to-slate-400-500 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex justify-center md:justify-start">
            <a href="#" className="mr-4"><i className="fab fa-facebook-f text-2xl"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-twitter text-2xl"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-instagram text-2xl"></i></a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
          <ul className="mb-4">
            <li><a href="#" className="text-lg text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-lg text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-lg text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" className="text-lg text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">123 Street, City, Country</p>
          <p className="mb-4">Email: example@example.com</p>
          <p>Phone: +123456789</p>
        </div>
      </div>
      <div className="mt-8 text-center md:text-left">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
