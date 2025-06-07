"use client"

import React from 'react'
import Image from 'next/image';
import '@/styles/components/navbar.css';

const NavBar = () => {
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
                    <button className='nav-button__login'>
                        Entrar
                    </button>
                </div>
            </div>
        </nav>
  )
}

export default NavBar