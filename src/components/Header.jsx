import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <section className='flex-col pl-0 pt-16 w-screen justify-center text-center bg-gray-900'>
      <h1 className='text-3xl font-extrabold'>
        {"I'm"} <span className='text-purple-500'>Lucas</span>
      </h1>
      <p>A full stack Web Developer.</p>
      <p className='pb-8'>
        I love working with... <strong className='text-xl'>React</strong>
      </p>
      <div className='w-screen flex justify-center pb-2'>
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
      <div className='h-10'></div>
    </section>
  );
};

export default Header;
