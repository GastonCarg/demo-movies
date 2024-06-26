'use client'

import StyledJsxRegistry from './registry'
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from './index';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StyledJsxRegistry>
          <Header />
          {children}
          <Footer />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
