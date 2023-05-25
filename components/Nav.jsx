'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className='flex w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center px-2'>
        <Image src="/assets/images/logo.svg"
               alt="Protopia Logo"
               width={30}
               height={30}
               className='object-contain'/>
        <p className='font-extrabold'>Protopia</p>
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'> Create Post</Link>
                </div>
            )
            :
            (<></>)}
        </div>
    </nav>
  )
}

export default Nav