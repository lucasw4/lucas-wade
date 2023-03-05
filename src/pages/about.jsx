import HeaderText from "@/components/HeaderText";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <section
      id='about--section'
      className='mt-72 mb-72 md:mt-72 md:mb-0 md:h-[44rem]'
    >
      <HeaderText message='About Me' />
      <div className='lg:mx-32 flex flex-col h-[40rem] lg:justify-center lg:items-center md:mt-24'>
        <div className='h-full flex flex-col justify-center lg:w-1/2'>
          <div className='py-4 pl-4 text-2xl'>
            I&apos;m a <strong className='text-purple-500'>Full-Stack </strong>
            web developer, but I focus on mainly{" "}
            <strong className='text-purple-500'>front-end </strong>
            development. I am constantly learning to improve my skills and love
            learning the latest technologies. Currently I am focused on learning
            <strong className='text-purple-500'> NextJS</strong> and improving
            my skills with <strong className='text-purple-500'>Tailwind</strong>
            .
          </div>
        </div>
        <div className='mx-16 md:w-fit md:mx-auto md:p-4 border border-gray-700 flex justify-center py-3 mb-10 transition-all hover:shadow-lg hover:shadow-black hover:scale-110'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/lucas-wade-0971541b2/'
            className='px-2 text-xl transition-all hover:scale-125 hover:text-purple-500 cursor-pointer'
          >
            <AiFillLinkedin />
          </a>
          <a
            target='_blank'
            href='https://github.com/lucasw4'
            className='px-2 text-xl transition-all hover:scale-125 hover:text-purple-500 cursor-pointer'
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
