import { Link } from "@mui/material";
import React from "react";
export default function Home() {
  return (
    <>
      <h2>"Hello, Page. children page"</h2>
      <br />
      <h1>
        <Link href="/login">login</Link>
      </h1>
    </>
  );
}
