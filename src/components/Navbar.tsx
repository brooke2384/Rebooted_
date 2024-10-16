import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

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
        {/* LEFT*/}
        <div className="w-1/3"></div>
        <Link href="/"></Link>
          <Image src="/logo.png" alt='' width={24} height={24}/>
        <div className='text-2xl tracking-wide'>Rebooted</div>
        {/*RIGHT*/}
        <div className="w-2/3 flex items-center justify-between gap-8"></div>
        <SearchBar/>
        <NavIcons/>

    </div>
  );
};

export default Navbar;
