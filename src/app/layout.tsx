"use client";

import "./globals.css";
import NavBar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme/theme";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import { modalStyle } from "@/types/pages/layout";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const openModal = () => {
    setShowModal(true);
  };

  const handleLogin = () => {
    console.log('fazendo o login');
  };

  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <NavBar handleOpenModal={openModal} />
            <Modal
              open={showModal}
              onClose={() => setShowModal(false)}
            >
              <Box 
                sx={modalStyle}
                component="form"
                onSubmit={handleLogin}
              >
                <Typography variant="h5" textAlign={"center"} sx={{ mb: 4 }}>
                  Entrar
                </Typography>

                <FormControl fullWidth>
                  <TextField 
                    label="E-mail"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <TextField 
                    label="Senha"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
              </Box>
            </Modal>
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
