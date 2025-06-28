"use client"

import React from 'react'
import Image from 'next/image';
import '@/styles/components/navbar.css';
import { useRouter, usePathname } from 'next/navigation';
import { NavBarProps } from '@/types/components/navbar';

const NavBar = ({ handleOpenLoginModal, handleOpenRegisterModal }: NavBarProps) => {
    const router = useRouter();
    const pathName = usePathname();

  return (
        <nav>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <Image 
                        src="/images/logo.png"
                        width={180}
                        height={70}
                        alt="Logo make test"
                        className='click_logo'
                        onClick={() =>  router.push('/')}
                    />
                </div>

                <div className='nav-menu'>
                    <button 
                        className={
                            pathName === '/login' ? 'nav-button__login_disabled' 
                             : 'nav-button__login'
                        } 
                        onClick={handleOpenLoginModal}
                        disabled={pathName === '/login' ? true : false}
                    >
                        Entrar
                    </button>

                    <button 
                        className={
                            pathName === '/login' ? 'nav-button__login_disabled' 
                             : 'nav-button__login'
                        } 
                        onClick={handleOpenRegisterModal}
                        disabled={pathName === '/login' ? true : false}
                        style={{ marginLeft: '10px'}}
                    >
                        Registrar
                    </button>
                    
                </div>
            </div>
        </nav>
  )
}

export default NavBar