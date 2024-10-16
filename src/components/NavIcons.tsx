"use client"
import Link from 'next/link';
import Image from 'next/image';
// components/NavIcons.tsx
import React from 'react';

const NavIcons: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Example icon links */}
      <Link href="/cart">
        <a>
          <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <Image src="/icons/user.svg" alt="Profile" width={24} height={24} />
        </a>
      </Link>
      {/* Add more icons as needed */}
    </div>
  );
};

export default NavIcons;
