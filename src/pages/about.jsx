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
      <div className='2xl:mx-[40rem] flex flex-col h-[40rem]'>
        <div className='h-full flex flex-col justify-center'>
          <div className='py-4 pl-4'>
            I recently graduated from the Lighthouse Labs Full-Stack web
            developer bootcamp and have been able to develop my skills in the
            latest web development technologies. I have experience in both
            front-end and back-end development and strive to create designs that
            are not only visually appealing but also highly functional and
            user-friendly.
          </div>
          <div className='py-2 pl-4'>
            Whether you are seeking a dynamic and engaging website or a reliable
            web application, I have the expertise and dedication to turn your
            vision into a reality. Let me bring your online presence to life.
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
