import { welcomeSx } from '@/styles/components/welcome';
import '@/styles/components/welcome.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';
import Testimonials from './Testimonials';
import { testimonials } from '@/types/components/testimonials';

const Welcome = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <div className='welcome-container'>
      <Typography 
        variant='h2' 
        textAlign={"center"}
        color='white'
        sx={{ mt: 5 }}
      >
          Crie/faça uma <span className='primary_text'>avaliação</span>
      </Typography>

      <Typography
        textAlign={'center'}
        color='#cfcfcf'
        sx={{ mt: 5 }}
      >
        Make Test é uma plataforma 100% online para criação 
        e realização de avaliações,<br /> 
        feita para substituir os tradicionais 
        testes em papel por uma <br />experiência 
        digital poderosa, intuitiva e acessível.
      </Typography>

      <Box
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        sx={{ mt: 5 }}
      >
        <TextField 
          label="Digite seu email"
          size='small'
          value={email}
          sx={welcomeSx}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant='contained'
          size='medium'
          sx={{ mb: 2, height: '4.2vh' }}
          onChange={() => console.log('olá')}
        >Começar</Button>
      </Box>

      <Typography
        textAlign={'center'}
        color='#cfcfcf'
        fontSize={'12px'}
      >
          Ao se registrar você concorda com nossos termos e condições
      </Typography>
      
      <Box
        sx={{ 
          backgroundColor: 'var(--primary)',
          width: '50%',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '10px',
          mt: 5,
          mb: 5,
         }}
      >
        <center>
          <Typography
            textAlign={'center'}
            color='white'
            fontWeight={'bolder'}
            variant='h4'
            sx={{ mb: 5 }}
          >
            O Futuro das Avaliações Digitais
          </Typography>
          <Image 
            className='home_image'
            alt='Tudo na palma da sua mão'
            src="/images/home_image_1.jpg"
            width={500}
            height={100}
          />
          <Typography
            textAlign={'center'}
            color='white'
            fontWeight={'bolder'}
            fontSize={'16px'}
            sx={{ mt: 2 }}
          >
            Make Test é uma plataforma 100% online 
            para criação e realização de avaliações,<br />
            feita para substituir os tradicionais 
            testes em papel<br /> por uma experiência digital 
            poderosa, intuitiva e acessível.
          </Typography>

          <Divider
            sx={{ mt: 5, backgroundColor: 'white' }}
          ></Divider>

          <Image 
            className='home_alternative_image'
            alt='Tudo na palma da sua mão'
            src="/images/home_image_2.jpg"
            width={500}
            height={100}
          />
           <Typography
            textAlign={'center'}
            color='white'
            fontWeight={'bolder'}
            fontSize={'16px'}
            sx={{ mt: 2 }}
          >
            Funcionalidades: Criação de avaliações 
            dinâmicas e personalizadas, <br />
            Atribuição de provas a grupos ou indivíduos,
            <br /> Interface responsiva, 
            com animações suaves e design moderno <br />
            e muito mais...
          </Typography>
        </center>
      </Box>

      <Typography
        textAlign={'center'}
        color='white'
        fontWeight={'bolder'}
        variant='h4'
        sx={{ mb: 5 }}
      >
        Depoimentos
      </Typography>
      
      <div className='testimonials-container'>
        { testimonials.map((t, i) => (
          <Testimonials 
            key={i}
            index={i}
            name={t.name}
            comment={t.comment}
            image={t.image}
            rating={t.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default Welcome