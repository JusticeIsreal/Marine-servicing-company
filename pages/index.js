import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "../pages/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Calm waters ltd</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main style={{ background: "#f4f5fa", overflow: "hidden" }}>
        <Homepage />
      </main>
    </>
  );
}
