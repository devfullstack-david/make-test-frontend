import '@/styles/components/welcome.css';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome-container__create'>
        <div className='welcome-container__text'>
          CRIE <br />SUA<br /> AVALIAÇÃO
        </div>

        <Image width={1000} height={400} src="/images/arrow-left.png" alt="arrow-left" />
      </div>

      <div className='welcome-container__make'>
        <Image width={1000} height={400} src="/images/arrow-right.png" alt="arrow-left" />

        <div className='welcome-container__text'>
          CRIE <br />SUA<br /> AVALIAÇÃO
        </div>
      </div>
    </div>
  )
}

export default Welcome