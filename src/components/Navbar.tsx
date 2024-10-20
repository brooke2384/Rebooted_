import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

const Navbar: React.FC = () => {
  return (
    <div className='h-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* MOBILE */}
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link href='/' className='text-xl font-bold'>
          <div className='text-2xl tracking-wide'>Rebooted</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href="/" className='flex items-center gap-3'>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={24} height={24} />
              <div className='text-2xl tracking-wide'>Rebooted</div>
            </div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/products'>Products</Link>
            <Link href='/solutions'>Solutions</Link>
            <Link href='/resources'>Resources</Link>
            <Link href='/community'>Community</Link>
            <Link href='/get-involved'>Support</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/login'>Login</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
