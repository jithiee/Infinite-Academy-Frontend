import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../layouts/navbars/Navbar"
import Footer from '../layouts/footer/Footer'

 

const NavFooter = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  );
}

export default NavFooter;
