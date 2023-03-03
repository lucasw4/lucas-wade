import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section>
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
      <div className='flex justify-center pb-10'>
        <ul className='flex justify-center w-1/2'>
          <li className='transition-all hover:scale-110'>
            <Link
              href='#about--section'
              className='hover:text-purple-500 px-2 py-2 '
            >
              About
            </Link>
          </li>
          <li className='transition-all hover:scale-110'>
            <Link
              href='#portfolio--section'
              className='hover:text-purple-500 px-2 py-2 '
            >
              Projects
            </Link>
          </li>
          <li className='transition-all hover:scale-110'>
            <a href='#nav--bar' className='hover:text-purple-500 px-2 py-2 '>
              Top
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
