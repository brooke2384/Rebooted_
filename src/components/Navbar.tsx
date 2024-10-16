import React from 'react';
import Menu from './Menu';

const Navbar: React.FC = () => {
  return (
    <div className='h-20 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        {/* MOBILE */}
        <div className='h-full flex items-center justify-between'>
      
      <a href='/' className='text-xl font-bold'>
        <div className='text-2xl tracking-wide'>Rebooted</div>
      </a>
      <Menu/>
    </div>
        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center justify-between gap-6 h-full"></div>
        {/* MOBILE */}


    </div>
  );
};

export default Navbar;
