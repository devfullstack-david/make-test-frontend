"use client"

import React from 'react'
import Image from 'next/image';
import '@/styles/components/navbar.css';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/login');
    };
  return (
        <nav>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <Image 
                        src="/images/logo.png"
                        width={180}
                        height={70}
                        alt="Logo make test"
                    />
                </div>

                <div className='nav-menu'>
                    <button className='nav-button__login' onClick={handleLogin}>
                        Entrar
                    </button>
                </div>
            </div>
        </nav>
  )
}

export default NavBar