"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {


    const [open, setOpen] = useState(false)

    return (
        <div className=''>
            <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={() => setOpen(prev => !prev)} />
            {
                open && (
                    <div className='absolute bg-slate-900 text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 text-xl z-10'>
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About Us</Link>
                        <Link href='/products'>Products</Link>
                        <Link href='/solutions'>Solutions</Link>
                        <Link href='/resources'>Resources</Link>
                        <Link href='/community'>Community</Link>
                        <Link href='/get-involved'>Get Involved</Link>
                        <Link href='/contact'>Contact Us</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/login'>Login</Link>
                    </div>
                )}
        </div>
    )
}

export default Menu