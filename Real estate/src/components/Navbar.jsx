import React, { useEffect, useState } from 'react';
import MenuIcon from '../assets/menu.png';
import CrossIcon from '../assets/cross.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow='hidden'
    }
    else{
       document.body.style.overflow='auto' 
    }
    return()=>{
        document.body.style.overflow='auto' 
    };
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10 '>
      {/* Desktop Navbar */}
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src="" alt="Logo" className='w-24' />

        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>

        <button className='hidden md:block bg-white text-black px-8 py-2 rounded-full hover:bg-gray-200 transition'>
          Sign up
        </button>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={MenuIcon}
          className='md:hidden w-7 cursor-pointer'
          alt="Menu icon"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-full h-full bg-white z-20 transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-end p-6'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={CrossIcon}
            className='w-6 cursor-pointer'
            alt="Close icon"
          />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-10 text-lg font-semibold text-black'>
          <a href="#Header" onClick={() => setShowMobileMenu(false)} className='hover:bg-gray-200 px-4 py-2 rounded-full'>Home</a>
          <a href="#About" onClick={() => setShowMobileMenu(false)} className='hover:bg-gray-200 px-4 py-2 rounded-full'>About</a>
          <a href="#Projects" onClick={() => setShowMobileMenu(false)} className='hover:bg-gray-200 px-4 py-2 rounded-full'>Projects</a>
          <a href="#Testimonials" onClick={() => setShowMobileMenu(false)} className='hover:bg-gray-200 px-4 py-2 rounded-full'>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
