import '@/styles/components/welcome.css';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome-container__create'>
        <div className='welcome-container__text'>
          CRIE 
          <br className='breakline'/> SUA 
          <br className='breakline'/> AVALIAÇÃO
        </div>

        <Image 
          width={1000} 
          height={300} 
          src="/images/arrow-left.png" 
          alt="arrow-left"
          className='welcome-container__image' 
        />
      </div>

      <div className='welcome-container__make'>
        <Image 
          width={1000} 
          height={300} 
          src="/images/arrow-right.png" 
          alt="arrow-left" 
          className='welcome-container__image' 
        />

        <div className='welcome-container__text'>
          FAÇA 
          <br className='breakline'/> UMA 
          <br className='breakline'/> AVALIAÇÃO
        </div>
      </div>
    </div>
  )
}

export default Welcome