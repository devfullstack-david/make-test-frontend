"use client";

import "./globals.css";
import NavBar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import theme from "@/styles/theme/theme";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import { modalStyle } from "@/types/pages/layout";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from "dayjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [birthday, setBirthday] = useState<Dayjs | null>(null);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleRegister = () => {
    if (
      !email || 
      !password ||
      !name ||
      !lastName ||
      !birthday
    ) {
      setMessageError('Por favor, preencha todos os campos');
      setShowMessageError(true);
    };

    console.log('registrando um usuário');
    // Registrar um usuário
    resetFields();
  };

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setName('');
    setLastName('');
    setBirthday(null);
    setMessageError('');
    setShowMessageError(false);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setMessageError('Por favor, preencha os dados corretamente');
      setShowMessageError(true);
    }

    console.log('fazendo o login');
    // Chamar o serviço de login
    resetFields();
  };

  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <NavBar 
            handleOpenLoginModal={openLoginModal} 
            handleOpenRegisterModal={openRegisterModal}
          />
            <Modal
              open={showLoginModal}
              onClose={() => setShowLoginModal(false)}
            >
              <Box 
                sx={modalStyle}
                component="form"
              >
                <Typography variant="h5" textAlign={"center"} sx={{ mb: 4 }}>
                  Entrar
                </Typography>

                <FormControl fullWidth>
                  <TextField 
                    label="E-mail"
                    required
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Senha"
                    required
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <Typography
                  sx={{ color: 'red' }}
                  variant={'subtitle1'}
                  display={ showMessageError ? 'block' : 'none'}
                >
                  { messageError }
                </Typography>

                <Button 
                  sx={{ mt: 2 }} 
                  variant="contained" 
                  onClick={handleLogin}
                >
                  Entrar
                </Button>
              </Box>
            </Modal>

            <Modal
              open={showRegisterModal}
              onClose={() => setShowRegisterModal(false)}
            >
              <Box 
                sx={modalStyle}
                component="form"
              >
                <Typography variant="h5" textAlign={"center"} sx={{ mb: 4 }}>
                  Criar conta
                </Typography>

                <FormControl fullWidth>
                  <TextField 
                    label="E-mail"
                    required
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Nome"
                    required
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Sobrenome"
                    required
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                      label="Data de nascimento"
                      value={birthday}
                      onChange={(newBirthday) => setBirthday(newBirthday)}
                    />
                  </LocalizationProvider>
                </FormControl>

                <Typography
                  sx={{ color: 'red' }}
                  variant={'subtitle1'}
                  display={ showMessageError ? 'block' : 'none'}
                >
                  { messageError }
                </Typography>

                <Button 
                  sx={{ mt: 2 }} 
                  variant="contained" 
                  onClick={handleRegister}
                >
                  Criar conta
                </Button>
              </Box>
            </Modal>
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
