import HeaderText from "@/components/HeaderText";
import React from "react";

const Resume = () => {
  return (
    <section className='h-52 mt-40' id='resume--section'>
      <HeaderText message='Resume' />
      <div className='flex-col text-center justify-center transition-all hover:scale-110 py-2 w-fit mx-auto mt-20'>
        <h1 className='text-xl'>View my resume here</h1>
        <a
          href='https://resume.creddle.io/resume/bmcws0s4p86'
          className='text-3xl border-b-2 border-zinc-700 hover:text-purple-500 hover:border-none'
          target={"_blank"}
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
