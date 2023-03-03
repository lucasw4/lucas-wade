import HeaderText from "@/components/HeaderText";
import React from "react";

const Contact = () => {
  return (
    <section className='mt-72 mb-60' id='contact--section'>
      <HeaderText message='Contact Me' />
      <div className='px-5 flex justify-center'>
        <div className='text-xl flex py-2'>
          <div className='ml-4 transition-all hover:scale-110 hover:text-purple-500'>
            <a href='#' className='underline hover:no-underline'>
              lucaswade4@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className='text-xl px-5 pt-2 pb-20 flex justify-center'>
        <div>
          <strong className='text-purple-500 ml-4'>(778)-836-9908</strong>
        </div>
      </div>
    </section>
  );
};

export default Contact;
