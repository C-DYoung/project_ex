"use client";

import { Inter } from "next/font/google";
import React from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;
