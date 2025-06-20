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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
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
              <Box sx={modalStyle}>
                Olá eu sou um modal
              </Box>
            </Modal>
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
