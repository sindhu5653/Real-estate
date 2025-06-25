import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2167941247/photo/modern-house-exterior-day-light-with-lawn-grass-3d-rendering.jpg?s=612x612&w=0&k=20&c=LpOIgTtVvbHlZJloZBMV0wBwX5PGPMEOFTAkr5VDvF8=')",
      }}
      id='Header'
    >
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text=[82px] inline-block max-w-3xl font-semibold pt-20'>Explore home that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
            <a href="#projects" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#contact"  className='bg-blue-500 border border-white px-8 py-3 rounded'>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
