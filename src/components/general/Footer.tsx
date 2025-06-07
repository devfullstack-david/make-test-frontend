import React from 'react'
import Image from 'next/image';
import '@/styles/components/footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-container__list'>
            <p>Prático</p>
            <p>Eficiente</p>
            <p>Intuitivo</p>
            <p>Criativo</p>
        </div>

        <div className='footer-container__logo'>
            <Image 
                src="/images/logo.png"
                width={180}
                height={70}
                alt="Logo make test"
            />
        </div>
    </footer>
  )
}

export default Footer