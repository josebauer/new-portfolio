import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Fugaz_One } from "next/font/google"

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

import type { Metadata } from "next";

const fugazOne = Fugaz_One({ 
  variable: "--font-fugaz-one",  
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Portfólio | José H Bauer",
  description: "Projetos - José H Bauer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fugazOne.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
