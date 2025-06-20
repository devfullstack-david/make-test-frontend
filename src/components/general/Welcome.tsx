import { welcomeSx } from '@/styles/components/welcome';
import '@/styles/components/welcome.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

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
          value={email}
          sx={welcomeSx}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button>Começar</Button>
      </Box>
    </div>
  )
}

export default Welcome