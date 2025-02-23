import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Fugaz_One, Geist, Geist_Mono } from "next/font/google"

import Header from "@/components/header/Header";
import type { Metadata } from "next";

const fugazOne = Fugaz_One({ 
  variable: "--font-fugaz-one",  
  weight: '400'
})


export const metadata: Metadata = {
  title: "Portfólio",
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
      </body>
    </html>
  );
}
