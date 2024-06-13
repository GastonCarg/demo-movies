'use client'

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <div>test</div>
      </body>
    </html>
  );
}
