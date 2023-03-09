import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Wade</title>
        <meta
          name='description'
          content='A portfolio website for Lucas Wade. Lucas Wade is a web developer, with a specialty in Front-End work. He is also a capable Full-Stack developer and web designer.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='bg-zinc-900 text-zinc-100 overflow-hidden'>
        <div className='bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-900'>
          <NavBar />
          <Header />
        </div>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
