import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";

export const metadata: Metadata = {
  title: "Make test",
  description: "Realizar avaliações de forma moderna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </head>
      <body>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
