import { Link } from "@mui/material";
import * as React from 'react';
import MainHome from "./MainHome";


export default function Home() {

  return (
    
    <>
      <h2>"Hello, Page. children page"</h2>
      <br />

      <MainHome />

      <br />
      <br />
      <h1>
        <Link href="/login">login</Link>
      </h1>
    </>
  );
}
