/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { registerUser } from "@/services/user";
import { UserToRegister } from "@/types/services/user";
import Snackbar from "@mui/material/Snackbar";
import { login } from "@/services/login";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";
import ClientOnly from "@/components/general/ClientOnly";
import { useSession } from "@/hooks/useSession";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoggedIn } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [messageAlert, setMessageAlert] = useState<string>('');
  const router = useRouter();

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleRegister = async () => {
    setIsLoading(true);

    try {
        if (
        !email || 
        !password ||
        !name ||
        !lastName ||
        !birthday
      ) {
        setMessageError('Por favor, preencha todos os campos');
        setShowMessageError(true);
        return;
      };

      const input: UserToRegister = {
        email,
        name,
        lastName,
        company,
        birthday,
        password,
        confirmPassword,
      };

      const response = await registerUser(input);

      if (response?.status == 201) {
        setMessageAlert('Usuário registrado');
        setIsOpenSnackbar(true);
      };

      resetRegisterFields();
      setShowRegisterModal(false);
      setShowLoginModal(true);
    } catch (err: any) {
      setMessageError('Ocorreu um erro ao criar o usuário');
      setShowMessageError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetRegisterFields = () => {
    setName('');
    setCompany('');
    setLastName('');
    setBirthday(null);
    setMessageError('');
    setShowMessageError(false);
    setConfirmPassword('');
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setMessageError('Por favor, preencha os dados corretamente');
        setShowMessageError(true);
      }

      const response = await login({ email, password });

      if (response?.status == 201) {
        setMessageAlert('Login realizado com sucesso');
        setIsOpenSnackbar(true);
      };

      setShowLoginModal(false);
      resetRegisterFields();
      router.refresh();
    } catch (error) {
      setMessageError('Ocorreu um erro ao realizar o login, verifique o email e senha colocados');
      setShowMessageError(true);
    }
  };

  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <ClientOnly>
            <NavBar 
              handleOpenLoginModal={openLoginModal} 
              handleOpenRegisterModal={openRegisterModal} 
            />
          
            <Snackbar 
              open={isOpenSnackbar}
              autoHideDuration={5000}
              color="primary"
              onClose={() => setIsOpenSnackbar(false)}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert
                onClose={() => setIsOpenSnackbar(false)}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                { messageAlert }
              </Alert>
            </Snackbar>

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
                    disabled={isLoading}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Nome"
                    required
                    value={name}
                    disabled={isLoading}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Sobrenome"
                    required
                    disabled={isLoading}
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Empresa"
                    value={company}
                    disabled={isLoading}
                    type="text"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                      label="Data de nascimento"
                      disabled={isLoading}
                      value={birthday}
                      onChange={(newBirthday) => setBirthday(newBirthday)}
                    />
                  </LocalizationProvider>
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

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Senha"
                    required
                    value={confirmPassword}
                    disabled={isLoading}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  onClick={handleRegister}
                  loading={isLoading}
                >
                  Criar conta
                </Button>
              </Box>
            </Modal>
            {children}

            {!isLoggedIn && <Footer />}
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
