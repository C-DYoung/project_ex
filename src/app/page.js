import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Hello, Page. children page</h2>
      <br/>
      <h1><Link href="/login">login</Link></h1>
    </>
  );
}
