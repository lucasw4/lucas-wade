import HeaderText from "@/components/HeaderText";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <section id='about--section'>
      <HeaderText message='About Me' />
      <div className='mb-10'>
        <p className='py-4 pl-4'>
          As a graduate of the Lighthouse Labs Full-Stack web developer
          bootcamp, I have honed my skills in the latest web development
          technologies and tools. My expertise extends to both front-end and
          back-end development, and my designs are not only visually stunning
          but also highly functional and user-friendly.
        </p>
        <p className='py-2 pl-4'>
          Whether you are seeking a dynamic and engaging website or a reliable
          web application, I have the expertise and dedication to turn your
          vision into a reality. Let me bring your online presence to life with
          my cutting-edge skills and exceptional design aesthetic.
        </p>
      </div>
      <div className='mx-16 md:w-fit md:mx-auto md:p-4 border border-gray-700 flex justify-center py-3 mb-10'>
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
    </section>
  );
};

export default About;
