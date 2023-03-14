import HeaderText from "@/components/HeaderText";
import Pill from "@/components/Pill";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <section
      id='about--section'
      className='mt-72 mb-32 md:mt-72 h-full md:mb-0 md:h-full'
    >
      <HeaderText message='About Me' />
      <div className='lg:mx-32 flex flex-col h-fit lg:justify-center lg:items-center md:mt-24 mt-32'>
        <div className='h-full flex flex-col justify-center lg:w-1/2'>
          <div className='py-4 pl-4 mx-4 text-xl md:text-2xl'>
            My name is{" "}
            <strong className='text-purple-500 font-bold'>Lucas Wade</strong>,
            and I&apos;m a 22 year old{" "}
            <strong className='text-purple-500'>Full-Stack </strong>
            web developer. However, I mainly focus on{" "}
            <strong className='text-purple-500'>front-end </strong>
            development. I am constantly looking for ways to improve my skills,
            and I love learning the latest web dev technologies. Currently I am
            focused on learning
            <strong className='text-purple-500'> NextJS</strong> and improving
            my skills with <strong className='text-purple-500'>Tailwind</strong>
            .<div className='h-24'></div>
            When I&apos;m not creating websites, you can catch me taking photos,
            reading books, or making music.
          </div>
        </div>
        <div className='mx-16 md:w-fit md:mx-auto md:p-4 border border-zinc-700 flex justify-center py-3 mb-10 transition-all hover:shadow-lg hover:shadow-black hover:scale-110 mt-20'>
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
        <h2 className='text-xl items-center text-center my-10 font-bold text-zinc-300'>
          Skills
        </h2>
        <div className='container grid grid-cols-2 px-10 gap-4 place-items-center min-w-full lg:flex xl:flex-nowrap flex-wrap justify-center'>
          <Pill text='NextJS' />
          <Pill text='React' />
          <Pill text='jQuery' />
          <Pill text='NodeJS' />
          <Pill text='JavaScript' />
          <Pill text='Ruby' />
          <Pill text='Tailwind' />
          <Pill text='HTML' />
          <Pill text='SQL' />
          <Pill text='CSS' />
        </div>
      </div>
    </section>
  );
};

export default About;
