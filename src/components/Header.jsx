import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineDown } from "react-icons/ai";
import ParticlesComponent from "./Particles";

const Header = () => {
  return (
    <section className='flex-col pl-0 w-full h-[44rem] md:h-screen justify-center text-center relative border-b-2 border-zinc-700'>
      <div className=''>
        <ParticlesComponent />
      </div>

      <div className='z-10 absolute w-screen top-1/3 flex justify-center'>
        <div className='w-60 bg-zinc-900 rounded-lg py-4 shadow-lg shadow-black'>
          <h1 className='text-4xl font-bold pb-2'>
            {"I'm"} <span className='text-purple-500 font-bold'>Lucas</span>
          </h1>
          <p>A full stack Web Developer.</p>
          <div className='w-full flex justify-center pb-2 pt-4'>
            <a
              target='_blank'
              href='https://github.com/lucasw4'
              className='px-2 text-xl transition-all hover:scale-125 hover:text-purple-500 cursor-pointer'
            >
              <AiFillGithub />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/lucas-wade-0971541b2/'
              className='px-2 text-xl transition-all hover:scale-125 hover:text-purple-500 cursor-pointer'
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className='flex justify-center'>
            <Link
              href='#about--section'
              className='text-xl transition-all hover:text-purple-500 animate-bounce hover:pause'
              scroll={false}
            >
              <AiOutlineDown />
            </Link>
          </div>
        </div>
      </div>

      <div className='h-20'></div>
    </section>
  );
};

export default Header;
