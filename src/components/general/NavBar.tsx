/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import '@/styles/components/navbar.css';
import { useRouter, usePathname } from 'next/navigation';
import { NavBarProps } from '@/types/components/navbar';
import { useSession } from '@/hooks/useSession';

const NavBar = ({ handleOpenLoginModal, handleOpenRegisterModal }: NavBarProps) => {
    const { isLoggedIn, logout } = useSession();
    const router = useRouter();
    const pathName = usePathname();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogout = async () => {
        setIsLoading(true);

        try {
            await logout();
            router.push('/');
        } catch (error) {
            console.error("Erro ao deslogar");
        } finally {
            setIsLoading(false);
        }
    }

    if (!isClient) return null;

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
                    { isLoggedIn ? 
                        <div className='nav-logged_container'>
                            <div className='nav-logged_item'>
                                Inicio
                            </div>

                            <div className='nav-logged_item'>
                                Avaliações
                            </div>

                            <div className='nav-logged_item'>
                                Chat
                            </div>

                            <div className='nav-logged_item'>
                                Configurações
                            </div>

                             <button 
                                className={'nav-button__login'} 
                                onClick={handleLogout}
                                disabled={isLoading}
                            >
                                Deslogar
                            </button>
                        </div>
                    :
                        <>
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
                            >
                                Registrar
                            </button>
                        </>
                    }
                    
                </div>
            </div>
        </nav>
  )
}

export default NavBar