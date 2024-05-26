import { Inter } from "next/font/google";
import React from "react";
import { Footer } from "./Footer";
import { Home } from "./Home";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children?: React.ReactNode;
}

export const metadata = {
  title: "Project_nextjs_ex",
  description: "Generated by create dy",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Home />
        {children}
        <Footer />
      </body>
    </html>
  );
}