import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Portfolio from "./portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Sahota Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-900 text-gray-100'>
        <NavBar />
        <Header />
        <Portfolio />
      </main>
    </>
  );
}
